import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SelectedPokemonState {
  selectedId?: number;
  pos?: { x: number; y: number}
}

const initialState: SelectedPokemonState = {
  selectedId: undefined,
  pos: undefined,
};

const selectedPokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState,
  reducers: {
    setSelectPokemonId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { setSelectPokemonId } = selectedPokemonSlice.actions;

export const selectSelectedPokemonId = (state: RootState) =>
  state.selectedPokemon.selectedId;

export default selectedPokemonSlice.reducer;