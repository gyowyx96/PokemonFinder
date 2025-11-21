import { configureStore } from "@reduxjs/toolkit";
import  selectedPokemonReducer  from "./slices/selectPokemonSlice";
import  pokemonNameReducer  from "./slices/pokemonName";

const store = configureStore({
  reducer: {
    selectedPokemon : selectedPokemonReducer,
    pokemonName: pokemonNameReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
