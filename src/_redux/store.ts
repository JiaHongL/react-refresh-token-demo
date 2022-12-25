import { configureStore } from "@reduxjs/toolkit";

import tokensReducer from "./slice/tokensSlice";

import { authApi } from "./services/authService";
import { userApi } from "./services/userService";
import { postsApi } from "./services/postsService";
import { commentsApi } from './services/commentsService';
import { categoriesApi } from "./services/categoriesService";

export const store = configureStore({
  reducer: {
    tokens: tokensReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer,
    [commentsApi.reducerPath]:commentsApi.reducer,
    [categoriesApi.reducerPath]:categoriesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware)
      .concat(categoriesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
