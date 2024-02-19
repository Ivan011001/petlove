import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectUserName = (state: RootState) => state.auth.name;

export const selectUserImage = (state: RootState) => state.auth.imgURL;

export const selectUserEmail = (state: RootState) => state.auth.email;

export const selectUserPhone = (state: RootState) => state.auth.phone;

export const selectUserFavorites = (state: RootState) => state.auth.favorites;

export const selectUserViewed = (state: RootState) => state.auth.viewed;
