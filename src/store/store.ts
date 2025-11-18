import { configureStore } from "@reduxjs/toolkit";
import  selectedPokemonReducer  from "./slices/selectPokemonSlice";

const store = configureStore({
  reducer: {
    selectedPokemon : selectedPokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
