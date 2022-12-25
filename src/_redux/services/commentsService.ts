import { createApi } from "@reduxjs/toolkit/query/react";
import { CommentDto } from "../../_models/comment.dto";
import { Result } from "../../_models/result.dto";

import customFetchBase from './base/customFetchBase';

// Define a service using a base URL and expected endpoints
export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getComments: builder.query<Result<CommentDto[]>,number>({
        query: (postId) => `/comments?postId=${postId}`,
      }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetCommentsQuery,
  useLazyGetCommentsQuery
} = commentsApi;
