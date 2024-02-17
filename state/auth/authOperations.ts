import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/services";

export interface ISignup {
  name: string;
  email: string;
  password: string;
}

const token = {
  set(token: string) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = "";
  },
};

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password }: ISignup, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });

      token.set(data.accessToken);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// export const signin = createAsyncThunk("auth/signin");

export const logout = createAsyncThunk(
  "auth/logout",
  async (credentials, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/auth/logout");

      token.unset();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// export const current = createAsyncThunk("auth/current");

// export const refresh = createAsyncThunk("auth/refresh");
