import "./Background.scss";
import pokemon from "../../assets/pkmn.webp";
import usePokemonSelection from "../../hook/usePokemonSelection";


const Background = () => {
  const { selectedPokemon, selectRandomPokemon } = usePokemonSelection();

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const container = e.currentTarget;
    const img = container.querySelector("#pokemons-img") as HTMLImageElement;

    if (!img) return;

    // Otteniamo la posizione effettiva dell’immagine renderizzata nel div
    const imgRect = img.getBoundingClientRect();

    // Coordinate del click relative all’immagine (perfette anche con zoom)
    const x = Math.floor(e.clientX - imgRect.left);
    const y = Math.floor(e.clientY - imgRect.top);

    const finalPokemonX = selectedPokemon.pos.x * Math.min((imgRect.width / img.naturalWidth), 1);
    const finalPokemonY =  selectedPokemon.pos.y * Math.min((imgRect.height / img.naturalHeight), 1);

    console.log("Coordinate reali sull'immagine:", x, y);
    console.log("Posizione Pokemon:", finalPokemonX, finalPokemonY,  window.innerWidth / 1440);

    // Range attorno al Pokémon
    const rangeX = [x - 70, x + 70];
    const rangeY = [y - 70, y + 70];

    if (
      finalPokemonX >= rangeX[0] &&
      finalPokemonX <= rangeX[1] &&
      finalPokemonY >= rangeY[0] &&
      finalPokemonY <= rangeY[1]
    ) {
      console.log("Pokemon trovato!");
      alert("Hai trovato il Pokemon!");
      selectRandomPokemon();
    }
  };

  return (
    <div className="main-img" onClick={handleClick}>
      <img src={pokemon} alt="Pokemon" id="pokemons-img"/>
    </div>
  );
};

export default Background;
