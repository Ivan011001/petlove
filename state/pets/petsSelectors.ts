import { RootState } from "../store";

export const selectPets = (state: RootState) => state.pets.data;
