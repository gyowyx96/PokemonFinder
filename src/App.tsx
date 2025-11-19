import { useSelector } from "react-redux";
import "./App.scss";
import PokemonCard from "./components/LeftPanel/PokemonCard";
import Background from "./components/MainPanel/Background";
import { selectSelectedPokemon } from "./store/slices/selectPokemonSlice";

function App() {
  const selectedPokemon = useSelector(selectSelectedPokemon);

  return (
    <div className="main-body">
      {selectedPokemon && <PokemonCard name={selectedPokemon.name} shiny={selectedPokemon.shiny} />}   
      {selectedPokemon && <Background />} {}
    </div>
  );
}

export default App;