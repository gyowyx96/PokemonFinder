import { createContext } from "react";
import type { SelectedPokemonType } from "../types/pokemon";

type SelectedPokemonContextType = {
    selectedPokemon: SelectedPokemonType;
    selectRandomPokemon: () => void;
};

const SelectedPokemonContext = createContext<SelectedPokemonContextType | null>(null);

export default SelectedPokemonContext;