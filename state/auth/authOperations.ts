import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/services";

export interface ISignup {
  name: string;
  email: string;
  password: string;
}

export interface ISignin {
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

export const signin = createAsyncThunk(
  "auth/signin",
  async ({ email, password }: ISignin, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signin", {
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

export const current = createAsyncThunk(
  "auth/current",
  async (credentials, { rejectWithValue, getState }) => {
    const state: any = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue("Not Authorized");
    }

    token.set(persistedToken);

    try {
      const { data } = await axiosInstance.get("/users/current");

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "auth/upload",
  async (imageURL: FormData | null, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/users/upload", imageURL);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (
    { name, phone }: { name: string; phone: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.patch("/users", { name, phone });

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "auth/addToFavorites",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/notices/favorites/add/${id}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "auth/removeFromFavorites",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `/notices/favorites/remove/${id}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToViewed = createAsyncThunk(
  "auth/addToViewed",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/notices/viewed/add/${id}`);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
// export const refresh = createAsyncThunk("auth/refresh");
