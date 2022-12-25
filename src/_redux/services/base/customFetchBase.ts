import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { Mutex } from "async-mutex";

import { Result } from "../../../models/result.dto";
import { TokensDto } from "../../../models/tokens.dto";

import { clearTokens, updateTokens } from "../../slice/tokensSlice";
import { RootState } from "../../store";

const baseUrl = `http://localhost:3000`;

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).tokens.value.accessToken;
    // If we have a token set in state, let's assume that we should be passing it.
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});


const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  const rootState = api.getState() as RootState;
 
  if(result.error?.status === 403){
    api.dispatch(clearTokens());
    window.location.href = "/login";
  }

  if (
    result.error?.status === 401 &&
    !result.meta?.request.url.includes('/login')
  ) {

    if (!mutex.isLocked()) {

      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            url: "auth/refreshToken",
            method: "POST",
            body: {
              refreshToken: rootState.tokens.value.refreshToken,
            },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {

          const tokens = (refreshResult.data as Result<TokensDto>).data;
          
          api.dispatch(updateTokens(tokens));

          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);

        } else {
          api.dispatch(clearTokens());
          alert((refreshResult.error?.data as Result<any>).message);
          window.location.href = "/login";
        }

      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
      
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }

  }

  return result;
};

export default customFetchBase;
