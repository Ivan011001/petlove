import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPet } from "@/types";

import { addPet, getPets, deletePet } from "./petsOperations";

interface IPetsState {
  data: IPet[];
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: IPetsState = {
  data: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addPet.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addPet.fulfilled, (state, action: PayloadAction<IPet>) => {
      state.data.push(action.payload);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addPet.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getPets.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      getPets.fulfilled,
      (state, action: PayloadAction<IPet[]>) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(getPets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(deletePet.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      deletePet.fulfilled,
      (state, action: PayloadAction<IPet>) => {
        state.data = state.data.filter((pet) => pet.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(deletePet.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const petsReducer = petsSlice.reducer;
