import { createApi } from "@reduxjs/toolkit/query/react";

import customFetchBase from "./base/customFetchBase";

import { Result } from "../../_models/result.dto";
import { UserInfoDto } from "../../_models/user-info.dto";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getProfile: builder.query<Result<UserInfoDto>, void>({
      query: () => `/user/profile`,
    }),
    registerUser: builder.mutation<Result<any>, any>({
      query: () => {
        return {
          url: `/user/register`,
          method: "POST",
        };
      },
    }),
    deleteUser: builder.mutation<Result<any>, any>({
      query: () => {
        return {
          url: `/user/delete`,
          method: "POST",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProfileQuery,
  useRegisterUserMutation,
  useDeleteUserMutation,
} = userApi;
