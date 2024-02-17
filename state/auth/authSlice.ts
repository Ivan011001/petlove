import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { signup } from "./authOperations";

export interface IAuthState {
  name: string;
  email: string;
  token: string;
  imgURL: string;
  isLoggedIn: boolean;
  error: string | unknown | null;
  isLoading: boolean;
}

const initialState: IAuthState = {
  name: "",
  email: "",
  token: "",
  imgURL: "",
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
