import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/services";

export interface ISignup {
  name: string;
  email: string;
  password: string;
}

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password }: ISignup, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// export const signin = createAsyncThunk("auth/signin");

// export const logout = createAsyncThunk("auth/logout");

// export const current = createAsyncThunk("auth/current");

// export const refresh = createAsyncThunk("auth/refresh");
