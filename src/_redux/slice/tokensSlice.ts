import { createSlice } from "@reduxjs/toolkit";

export const tokensSlice = createSlice({
  name: "tokens",
  initialState: {
    value: {
      accessToken: window.localStorage.getItem('accessToken') || '',
      refreshToken: window.localStorage.getItem('refreshToken') || '',
    },
  },
  reducers: {
    updateTokens: (state, action) => {
      state.value = { ...state.value, ...action.payload };
      window.localStorage.setItem('accessToken', state.value.accessToken);
      window.localStorage.setItem('refreshToken', state.value.refreshToken);
    },
    clearTokens: (state) => {
      state.value = {
        accessToken: "",
        refreshToken: "",
      };
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('refreshToken');
    },
  },
});

export const { updateTokens ,clearTokens } = tokensSlice.actions;

export default tokensSlice.reducer;
