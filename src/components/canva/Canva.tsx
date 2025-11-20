import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cell from "./Cell";
import "./pokemonCanva.scss";
import { setSelectPokemonId, setSelectPokemonPos, selectSelectedPokemonId, selectSelectedPokemonPos } from "../../store/slices/selectPokemonSlice";

const numberOfPokemon = 300;
const maxPokemonId = 1000;
const numberOfColumns = numberOfPokemon / 10;
const celDim = "30px";

type PokemonCell = {
  id: number;
  posX: number;
  posY: number;
};

const Canva = () => {
  const dispatch = useDispatch();

  // Selezione Pokémon dal Redux store
  const selectedPokemonId = useSelector(selectSelectedPokemonId);
  const selectedPokemonPos = useSelector(selectSelectedPokemonPos);

  const selectedPokemon = selectedPokemonId && selectedPokemonPos
    ? { id: selectedPokemonId, pos: selectedPokemonPos }
    : null;

  // Stato celle
  const [cells, setCells] = useState<PokemonCell[]>(() => {
    const allIds = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
    allIds.sort(() => Math.random() - 0.5);
    const selectedIds = allIds.slice(0, numberOfPokemon);
    return selectedIds.map(id => ({ id, posX: 0, posY: 0 }));
  });

  // Aggiorna posizione di ogni cella quando l'immagine è pronta
  const handlePosition = (id: number, absX: number, absY: number) => {
    const relativeX = absX
    const relativeY = absY

    setCells(prev =>
      prev.map(cell => (cell.id === id ? { ...cell, posX: relativeX, posY: relativeY } : cell))
    );
};

  const resetPokemon = () => {
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    dispatch(setSelectPokemonId(randomCell.id));
    dispatch(setSelectPokemonPos({ x : randomCell.posX, y: randomCell.posY}));
    console.log("Selezione Pokémon resettata.");
  };

  // Seleziona un Pokémon casuale **solo quando tutte le celle hanno posizione valida**
  useEffect(() => {
    const allReady = cells.every(c => c.posX !== 0 && c.posY !== 0);
    if (!allReady || selectedPokemonId) return; // già selezionato

    const randomCell = cells[Math.floor(Math.random() * cells.length)];

    dispatch(setSelectPokemonId(randomCell.id));
    dispatch(setSelectPokemonPos({ x: randomCell.posX, y: randomCell.posY }));

    console.log("Pokemon selezionato:", randomCell.id, "Posizione reale:", randomCell.posX, randomCell.posY);
  }, [cells, dispatch, selectedPokemonId]);

  // Gestione click per “acchiappa Pokémon”
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (!selectedPokemon) return;

  // posizione del click normalizzata
  const clickX = e.clientX
  const clickY = e.clientY

  const tolerance = 70;

  if (
    Math.abs(clickX - selectedPokemon.pos.x) <= tolerance &&
    Math.abs(clickY - (selectedPokemon.pos.y )) <= tolerance
  ) {
    alert(`Hai trovato il Pokémon con ID ${selectedPokemon.id}!`);
    resetPokemon();
  } else {
    console.log(`Click fuori: (${clickX.toFixed(2)}, ${clickY.toFixed(2)})`);
  }
};
  return (
    <div className="container">
      <div
        className="pokemon-canva"
        style={{
          gridTemplateColumns: `repeat(${numberOfColumns}, ${celDim})`,
          gridAutoRows: `${celDim}`,
        }}
        onClick={handleClick}
      >
        {cells.map(cell => (
          <Cell key={cell.id} id={cell.id} onPosition= {handlePosition} />
        ))}
      </div>
    </div>
  );
};

export default Canva;
