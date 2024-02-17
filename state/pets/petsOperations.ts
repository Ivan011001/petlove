import { axiosInstance } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddPetFormValues } from "@/app/(main)/add-pet/_components/add-pet-form";

export const addPet = createAsyncThunk(
  "pets/add",
  async (credentials: IAddPetFormValues, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/pets", credentials);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPets = createAsyncThunk(
  "pets/get",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/pets");

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/pets/${id}`);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
