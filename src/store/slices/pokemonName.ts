import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PokemonNameState {
  name: string;
}
const initialState: PokemonNameState = {
  name: "nome",
};

const pokemonNameSlice = createSlice({
  name: "pokemonName",
  initialState,
  reducers: {
    setPokemonName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
    },
});

export default pokemonNameSlice.reducer;
export const selectPokemonName = (state: { pokemonName: PokemonNameState }) =>
  state.pokemonName.name;

export const { setPokemonName } = pokemonNameSlice.actions;