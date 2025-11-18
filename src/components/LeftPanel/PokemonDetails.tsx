import type { PokemonType } from "../../types/pokemon"

type PokeProps = {
    pokemon: PokemonType
}
const PokemonDetails = ({ pokemon } : PokeProps ) => {
    const isShyny = false;
    let sprite = pokemon.sprites.front_default;
    if (isShyny) sprite = pokemon.sprites.front_shiny;
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
            <h1>Acchiappa  {(pokemon.name).charAt(0).toUpperCase() + pokemon.name.slice(1)} </h1>
            <img src={sprite} alt={pokemon.name} />
            <p>Descrizione: {getIta()}</p>
        </div>
    )
}
export default PokemonDetails