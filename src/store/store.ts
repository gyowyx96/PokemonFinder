import { configureStore } from "@reduxjs/toolkit";
import  selectedPokemonReducer  from "./slices/selectPokemonSlice";
import  pokemonNameReducer  from "./slices/pokemonName";
import timerReducer from "./slices/timerSlice";
import scoreReducer from "./slices/scoreSlice"

const store = configureStore({
  reducer: {
    selectedPokemon : selectedPokemonReducer,
    pokemonName: pokemonNameReducer,
    timer: timerReducer,
    score: scoreReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

