import "./cell.scss"
type CellProps = {
     id: number,
     colonne: number,
     righe: number
};
const Cell = ({ id , colonne, righe}: CellProps) => {
    const handleClick = () => {
        console.log(`Cella ${id} cliccata! Posizione: (Colonna: ${colonne}, Riga: ${righe})`);
    }
    return(
        <div key={id} className="cell" onClick={handleClick}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        </div>
    )
}
export default Cell;