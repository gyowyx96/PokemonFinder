import { configureStore } from "@reduxjs/toolkit";
import  selectedPokemonReducer  from "./slices/selectPokemonSlice";
import  pokemonNameReducer  from "./slices/pokemonName";
import timerReducer from "./slices/timerSlice";

const store = configureStore({
  reducer: {
    selectedPokemon : selectedPokemonReducer,
    pokemonName: pokemonNameReducer,
    timer: timerReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
