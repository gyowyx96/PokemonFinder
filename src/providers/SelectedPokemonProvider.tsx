import { useState } from "react";
import { pokemonSelect } from "../utils/pokemon";
import SelectedPokemonContext from "../contexts/SelectedPokemonContext";

const SelectedPokemonProvider = ({ children }: {children : React.ReactNode}) => {
    const [selectedPokemon, setSelectedPokemon] = useState(
    pokemonSelect()
  );

  const selectRandomPokemon = () => {
    setSelectedPokemon(pokemonSelect());
  }

    return (
    <SelectedPokemonContext.Provider value={{ selectedPokemon, selectRandomPokemon }}>
        {children}
    </SelectedPokemonContext.Provider>
    );
}

export default SelectedPokemonProvider; 