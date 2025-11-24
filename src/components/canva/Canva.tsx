import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectPokemonId, setSelectPokemonPos, selectSelectedPokemonId, selectSelectedPokemonPos } from "../../store/slices/selectPokemonSlice";

import Cell from "../cell/Cell";
import triggerFlash from "../../utils/triggerFlash";

import "./pokemonCanva.scss";
import { NumberOfPokemon, MaxPokemonId  } from "../../utils/configVariable";
import { pause, selectTimer } from "../../store/slices/timerSlice";
const numberOfColumns = NumberOfPokemon / 10;
const celDim = "30px";

type PokemonCell = {
  id: number;
  posX: number;
  posY: number;
};
type CanvaProps ={
  onCatch: () => void
}
const Canva = ({onCatch}: CanvaProps) => {
  const dispatch = useDispatch();

  // Selezione Pokémon dal Redux store
  const selectedPokemonId = useSelector(selectSelectedPokemonId);
  const selectedPokemonPos = useSelector(selectSelectedPokemonPos);
  const timeLeft = useSelector(selectTimer)

  const selectedPokemon = selectedPokemonId && selectedPokemonPos
    ? { id: selectedPokemonId, pos: selectedPokemonPos }
    : null;

  // Stato celle
  const [cells, setCells] = useState<PokemonCell[]>(() => {
    const allIds = Array.from({ length: MaxPokemonId }, (_, i) => i + 1); //crea un array con gli id di tutti i pokemon
    allIds.sort(() => Math.random() - 0.5); //randomizza le posizioni nell'array

    const selectedIds = allIds.slice(0, NumberOfPokemon); //ne estrae solo una parte equivalente al numero di celle che voglio

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
  
  //Seleziona un pokemon da quelli presenti nelle celle passando l'id e la posizione come variabile in store 
  const setPokemon = () => {
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    dispatch(setSelectPokemonId(randomCell.id));
    dispatch(setSelectPokemonPos({ x : randomCell.posX, y: randomCell.posY}));
  };

  // Seleziona un Pokémon casuale solo quando tutte le celle hanno posizione valida
  useEffect(() => {
    const allReady = cells.every(c => c.posX !== 0 && c.posY !== 0); //Controllo che le posizioni non siano quelle iniziali
    if (!allReady || selectedPokemonId) return;

    setPokemon();
    //console.log("Pokemon selezionato:", randomCell.id, "Posizione reale:", randomCell.posX, randomCell.posY);
  });

  // Gestione click per “acchiappa Pokémon”
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedPokemon) return;

    const clickX = e.clientX
    const clickY = e.clientY

    const tolerance = 70;

    if (
      Math.abs(clickX - selectedPokemon.pos.x) <= tolerance &&
      Math.abs(clickY - (selectedPokemon.pos.y )) <= tolerance
    ) {
      triggerFlash();
      setPokemon();
      onCatch();
    } else {
      console.log(`Click fuori: (${clickX.toFixed(2)}, ${clickY.toFixed(2)})`);
    }
  };
  //Controllo per vedere che il tempo non sia ancora scaduto
  if (timeLeft <= 0){
    dispatch(pause())
    return <>
      <h1>Tempo scaduto</h1>
    </>
  }

  return (
    <div className={`container`}>
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
