import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import PokemonCard from "./components/pokemonToFind/PokemonCard";
import { selectSelectedPokemonId } from "./store/slices/selectPokemonSlice";
import Canva from "./components/canva/Canva";
import Timer from "./components/timer/Timer";
import Counter from "./components/counter/Counter";
import { increment, selectScore } from "./store/slices/scoreSlice";

function App() {
  const counter = useSelector(selectScore);
  const dispatch = useDispatch();
  // Prendiamo SOLO l'ID dal Redux store
  const selectedPokemonId = useSelector(selectSelectedPokemonId);

  return (
    <div className="main-body">
      <div className="upper-Row">
        <Counter count={counter}/>
        {selectedPokemonId && <PokemonCard id={selectedPokemonId} />}
        <Timer />
      </div>
      <Canva onCatch={() => dispatch(increment())}/>
    </div>
  );
}

export default App;
