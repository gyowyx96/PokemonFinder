import "./Background.scss";
import pokemon from "../../assets/pkmn1.webp";
import { selectPokemon, selectSelectedPokemon } from "../../store/slices/selectPokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSelect } from "../../utils/pokemon";

const Background = () => {
  const selectedPokemon = useSelector(selectSelectedPokemon);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const img = container.querySelector("#pokemons-img") as HTMLImageElement;
    if (!img || !selectedPokemon) return;

    const imgRect = img.getBoundingClientRect();
    const x = Math.floor(e.clientX - imgRect.left);
    const y = Math.floor(e.clientY - imgRect.top);
    
    console.log(`Clicked at: (${x}, ${y})`);

    const scale = Math.min(imgRect.width / img.naturalWidth, 1);
    const finalPokemonX = selectedPokemon.pos.x * scale;
    const finalPokemonY = selectedPokemon.pos.y * scale;

    const rangeX = [x - 50, x + 50];
    const rangeY = [y - 50, y + 50];

    if (
      finalPokemonX >= rangeX[0] &&
      finalPokemonX <= rangeX[1] &&
      finalPokemonY >= rangeY[0] &&
      finalPokemonY <= rangeY[1]
    ) {
      alert(`Hai trovato ${selectedPokemon.name}!`);
      dispatch(selectPokemon(pokemonSelect()));
    }
  };

  return (
    <div className="main-img" onClick={handleClick}>
      <img src={pokemon} alt="Pokemon" id="pokemons-img" />
    </div>
  );
};

export default Background;
