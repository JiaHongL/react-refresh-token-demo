import { createApi } from "@reduxjs/toolkit/query/react";

import customFetchBase from "./base/customFetchBase";

import { Result } from "../../_models/result.dto";

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getCategories: builder.query<Result<string[]>, void>({
      query: () => `/categories`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery } = categoriesApi;
