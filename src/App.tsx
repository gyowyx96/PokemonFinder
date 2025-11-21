import { useSelector } from "react-redux";
import "./App.scss";
import PokemonCard from "./components/pokemonToFind/PokemonCard";
import { selectSelectedPokemonId } from "./store/slices/selectPokemonSlice";
import Canva from "./components/canva/Canva";
import Timer from "./components/timer/Timer";
import Counter from "./components/counter/Counter";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  // Prendiamo SOLO l'ID dal Redux store
  const selectedPokemonId = useSelector(selectSelectedPokemonId);

  return (
    <div className="main-body">
      <div className="upper-Row">
        <Counter count={counter}/>
        {selectedPokemonId && <PokemonCard id={selectedPokemonId} />}
        <Timer />
      </div>
      <Canva onCatch={() =>  setCounter(prev => prev+1)}/>
    </div>
  );
}

export default App;
