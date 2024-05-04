import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  loginResponse: null,
  user: null,
  isSuccess: false,
  resetResponse: null,
  logoutResponse: null,
  isLoading: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState: INITIAL_STATE,
  reducers: {
    loginResponse(state, { payload }) {
      return {
        ...state,
        loginResponse: payload.response,
      };
    },
    userPremium: (state) => state,
    userVerified: (state) => state,
    authorizeUser: (state) => state,
    registerUser: (state) => state,
    updateAuthSuccessStatus(state, { payload }) {
      return {
        ...state,
        isSuccess: payload,
      };
    },
    updateAuthLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const {
  loginResponse,
  updateAuthSuccessStatus,
  authorizeUser,
  registerUser,
  updateAuthLoading,
  userVerified,
  userPremium,
} = mainSlice.actions;

export default mainSlice.reducer;
