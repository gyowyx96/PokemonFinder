import { useEffect, useState } from "react";
import type { PokemonType } from "../../types/pokemon";
import PokemonDetails from "./PokemonDetails";
import "./PokemonCard.scss";

type PokemonCardProps = {
  nome: string; // <- qui dichiari la prop
};
const PokemonCard = ({ nome }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<PokemonType>(null!);

  useEffect(() => {
    
    const fetchPokemon = async () => {        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        const data = await response.json();
        const pokeEntry = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nome}`);
        const pokeEntryData = await pokeEntry.json();
        const fullData = { ...data, ...pokeEntryData };
        setPokemon(fullData);
        console.log(fullData);
    };

    fetchPokemon();
  }, [nome]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="poke-card">
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
};

export default PokemonCard;