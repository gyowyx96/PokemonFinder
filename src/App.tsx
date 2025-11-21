import { useSelector } from "react-redux";
import "./App.scss";
import PokemonCard from "./components/pokemonToFind/PokemonCard";
import { selectSelectedPokemonId } from "./store/slices/selectPokemonSlice";
import Canva from "./components/canva/Canva";

function App() {
  // Prendiamo SOLO l'ID dal Redux store
  const selectedPokemonId = useSelector(selectSelectedPokemonId);

  return (
    <div className="main-body">
      {/* Passiamo l'ID come prop a PokemonCard */}
      {selectedPokemonId && <PokemonCard id={selectedPokemonId} />}
      <Canva /*name={pokemon.name}*//>
    </div>
  );
}

export default App;
