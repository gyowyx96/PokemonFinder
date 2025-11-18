import { useEffect, useState } from "react";
import type { PokemonType } from "../../types/pokemon";
import PokemonDetails from "./PokemonDetails";
import "./PokemonCard.scss";

type PokemonCardProps = {
  name?: string; // <- qui dichiari la prop
  shiny?: boolean;
};
const PokemonCard = ({ name, shiny }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);

useEffect(() => {
  console.log("PokemonCard mounted or updated");
  if (!name) return;

  const fetchPokemon = async () => {
    console.log(`Fetching data for ${name} (shiny: ${shiny})`);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) throw new Error(`Errore fetch pokemon: ${response.status}`);
      const data = await response.json();

      let pokeEntryData = {};
      try {
        const pokeEntry = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        if (!pokeEntry.ok) throw new Error(`Errore fetch species: ${pokeEntry.status}`);
        pokeEntryData = await pokeEntry.json();
      } catch (err) {
        console.warn("Species non disponibile, uso dati base", err);
      }

      const fullData = { ...data, ...pokeEntryData, shiny: shiny || false };
      setPokemon(fullData);
    } catch (err) {
      console.error("Errore fetch Pokemon:", err);
      setPokemon(null);
    }
  };

  fetchPokemon();
}, [name, shiny]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="poke-card">
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
};

export default PokemonCard;