import { createApi } from "@reduxjs/toolkit/query/react";

import customFetchBase from "./base/customFetchBase";

import { Result } from "../../_models/result.dto";
import { TokensDto } from "../../_models/tokens.dto";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    login: builder.mutation<
      Result<TokensDto>,
      { username: string; password: string }
    >({
      query: (body) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body,
        };
      },
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useLoginMutation
} = authApi;
