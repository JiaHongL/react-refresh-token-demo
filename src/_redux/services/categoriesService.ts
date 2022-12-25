import { createApi } from "@reduxjs/toolkit/query/react";
import { Result } from "../../_models/result.dto";

import customFetchBase from './base/customFetchBase';

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getCategories: builder.query<Result<string[]>,null>({
        query: () => `/categories`,
      }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetCategoriesQuery
} = categoriesApi;
