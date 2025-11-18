import './App.scss'
import PokemonCard from './components/LeftPanel/PokemonCard'
import Background from './components/MainPanel/Background'
import usePokemonSelection from './hook/usePokemonSelection';

function App() {
  const { selectedPokemon } = usePokemonSelection();
  return (
    <div className="main-body">
      <PokemonCard nome={selectedPokemon.nome} />
      <Background pokemonPos={selectedPokemon.pos} />
    </div>
  );
}
export default App
