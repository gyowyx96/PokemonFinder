import { useEffect, useState } from "react";
import Cell from "./Cell";
import "./pokemonCanva.scss";
import { useDispatch } from "react-redux";
import { setSelectPokemonId } from "../../store/slices/selectPokemonSlice";

const numberOfPokemon = 100;
const maxPokemonId = 898;
const numberOfColumns = numberOfPokemon / 10;

type PokemonCell = {
  id: number;
  colonne: number;
  righe: number;
};

const Canva = () => {
  const dispatch = useDispatch();

  const [cells] = useState<PokemonCell[]>(() => {
    const allIds = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
    allIds.sort(() => Math.random() - 0.5);
    const selectedIds = allIds.slice(0, numberOfPokemon);

    return selectedIds.map((id, index) => ({
      id,
      colonne: index % numberOfColumns,
      righe: Math.floor(index / numberOfColumns),
    }));
  });

  useEffect(() => {
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    dispatch(setSelectPokemonId(randomCell.id));
  }, [cells, dispatch]);

  return (
    <div className="container">
      <div
        className="pokemon-canva"
        style={{
          gridTemplateColumns: `repeat(${numberOfColumns}, 30px)`
        }}
      >
        {cells.map(cell => (
          <Cell key={cell.id} id={cell.id} colonne={cell.colonne} righe={cell.righe} />
        ))}
      </div>
    </div>
  );
};

export default Canva;
