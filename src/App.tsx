import { useSelector } from "react-redux";
import "./App.scss";
import PokemonCard from "./components/LeftPanel/PokemonCard";
import { selectSelectedPokemon } from "./store/slices/selectPokemonSlice";
import Canva from "./components/canva/Canva";

function App() {
  const selectedPokemon = useSelector(selectSelectedPokemon);

  return (
    <div className="main-body">
      {selectedPokemon && <PokemonCard name={selectedPokemon.name} shiny={selectedPokemon.shiny} />}
      {<Canva />}
    </div>
  );
}

export default App;
