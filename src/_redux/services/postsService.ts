import { PostItemDetailDto } from '../../_models/post-item-detail.dto';
import { createApi } from "@reduxjs/toolkit/query/react";
import { PostItemDto } from "../../_models/post-item.dto";

import { Result } from "../../_models/result.dto";

import customFetchBase from "./base/customFetchBase";

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getPosts: builder.query<Result<PostItemDto[]>,any>({
      query: () => `/posts`,
    }),
    getPostDetail: builder.query<Result<PostItemDetailDto>, string>({
      query: (postId: string) => `/posts/${postId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetPostsQuery, 
  useGetPostDetailQuery,
  useLazyGetPostDetailQuery
} = postsApi;
