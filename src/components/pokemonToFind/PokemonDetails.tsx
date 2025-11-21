import { useDispatch } from "react-redux";
import type { PokemonType } from "../../types/pokemon"
import { setPokemonName } from "../../store/slices/pokemonName";
import { capitalize } from "../../utils/capitalize";

type PokeProps = {
    pokemon: PokemonType,
    position?: { x: number; y: number};
}

const PokemonDetails = ({ pokemon } : PokeProps ) => {
    const dispatch = useDispatch();
    const savePokemonName = (name: string) => {
        dispatch(setPokemonName(name));
    }
    savePokemonName(pokemon.name);

    let sprite = pokemon.sprites.front_default;
    if (pokemon.shiny) sprite = pokemon.sprites.front_shiny;

    const getIta = () => {
        const entry = pokemon.flavor_text_entries?.find(
            (entry) => entry.language.name === "it"
        );
        return entry
            ? entry.flavor_text.replace(/\n|\f/g, " ")
            : pokemon.flavor_text_entries?.[0]?.flavor_text.replace(/\n|\f/g, " ") || "No description";
    };
    
    return (
        <div>
            <h1>Acchiappa  {capitalize(pokemon.name)} </h1>
            <img src={sprite} alt={pokemon.name} />
            <p>Descrizione: {getIta()}</p>
        </div>
    )
}
export default PokemonDetails