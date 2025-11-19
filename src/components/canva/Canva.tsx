import { useState } from "react";
import Cell from "./Cell";
import "./pokemonCanva.scss";
const numberOfPokemon = 100;
const maxPokemonId = 898;

const Canva = () => {
    const [ids] = useState<number[]>(() => {
        const allIds = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
        allIds.sort(() => Math.random() - 0.5); // shuffle
        return allIds.slice(0, numberOfPokemon);
    });
  return (
    <div className="container">
        <div className="pokemon-canva"
            style={{
                gridTemplateColumns: `repeat(${numberOfPokemon / 10}, 30px)`
            }}>
            {ids.map(id => <Cell key={id} id={id} />)}
            </div>
    </div>);
}
export default Canva;