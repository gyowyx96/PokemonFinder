import { useSelector } from "react-redux";
import "./App.scss";
import PokemonCard from "./components/pokemonToFind/PokemonCard";
import { selectSelectedPokemonId } from "./store/slices/selectPokemonSlice";
import Canva from "./components/canva/Canva";
import Timer from "./components/timer/Timer";

function App() {
  // Prendiamo SOLO l'ID dal Redux store
  const selectedPokemonId = useSelector(selectSelectedPokemonId);

  return (
    <div className="main-body">
      <div className="upper-Row">
        {selectedPokemonId && <PokemonCard id={selectedPokemonId} />}
        <Timer />
      </div>
      
      <Canva /*name={pokemon.name}*//>
    </div>
  );
}

export default App;
