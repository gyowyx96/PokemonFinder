import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SelectedPokemonType } from "../../types/pokemon";
import type { RootState } from "../store";
import { pokemonSelect } from "../../utils/pokemon";

interface SelectedPokemonState {
  selectedPokemon: SelectedPokemonType | null;
}

const initialState: SelectedPokemonState = {
  selectedPokemon: pokemonSelect(),
};

const selectedPokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<SelectedPokemonType>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { selectPokemon } = selectedPokemonSlice.actions;

export const selectSelectedPokemon = (state: RootState) =>
  state.selectedPokemon.selectedPokemon;

export default selectedPokemonSlice.reducer;