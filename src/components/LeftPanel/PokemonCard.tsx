import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { PokemonType } from "../../types/pokemon";
import PokemonDetails from "./PokemonDetails";
import "./pokemonCard.scss";
import { selectSelectedPokemonId } from "../../store/slices/selectPokemonSlice";

type PokemonCardProps = {
  id?: number;
  shiny?: boolean;
};

const PokemonCard = ({ shiny }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);

  // ⬇️ PRENDI L’ID SALVATO IN REDUX
  const id = useSelector(selectSelectedPokemonId);

  useEffect(() => {
    if (!id) return;

    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error(`Errore fetch pokemon: ${response.status}`);
        const data = await response.json();

        let speciesData = {};
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
          if (!res.ok) throw new Error(`Errore fetch species: ${res.status}`);
          speciesData = await res.json();
        } catch {
          console.warn("Nessun dato species, procedo comunque");
        }

        setPokemon({ ...data, ...speciesData, shiny: shiny || false });
      } catch (err) {
        console.error("Errore fetch:", err);
        setPokemon(null);
      }
    };

    fetchPokemon();
  }, [id, shiny]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="poke-card">
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
};

export default PokemonCard;
