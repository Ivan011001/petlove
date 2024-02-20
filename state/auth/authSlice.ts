import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  signup,
  logout,
  signin,
  current,
  uploadImage,
  updateUser,
  addToFavorites,
  addToViewed,
  removeFromFavorites,
} from "./authOperations";
import { INotice } from "@/types";

export interface IAuthState {
  name: string;
  email: string;
  token: string;
  phone: string;
  imgURL: string;
  isLoggedIn: boolean;
  error: string | unknown | null;
  isLoading: boolean;
  favorites: INotice[];
  viewed: INotice[];
}

const initialState: IAuthState = {
  name: "",
  email: "",
  token: "",
  phone: "",
  imgURL: "",
  isLoggedIn: false,
  error: null,
  isLoading: false,
  favorites: [],
  viewed: [],
};

const handleRejected = (state: IAuthState, action: PayloadAction) => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = action.payload;
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
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(signup.rejected, (state, action: any) =>
      handleRejected(state, action)
    );

    builder.addCase(signin.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(signin.rejected, (state, action: any) =>
      handleRejected(state, action)
    );
    builder.addCase(signin.pending, (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.error = null;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(current.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.imgURL = action.payload.profileUrl;
      state.phone = action.payload.phone;
      state.favorites = action.payload.favoritesIDs;
      state.viewed = action.payload.viewedIDs;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(current.rejected, (state, action: any) =>
      handleRejected(state, action)
    );

    builder.addCase(logout.fulfilled, (state, action) => {
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(logout.rejected, (state, action: any) =>
      handleRejected(state, action)
    );

    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.imgURL = action.payload;
      state.isLoading = false;
    });

    builder.addCase(uploadImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addToFavorites.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(
      addToFavorites.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.favorites.push(action.payload);
      }
    );

    builder.addCase(removeFromFavorites.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(
      removeFromFavorites.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        );
      }
    );

    builder.addCase(addToViewed.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addToViewed.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.viewed.push(action.payload);
    });
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
