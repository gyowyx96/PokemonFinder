import "./cell.scss"
type CellProps = {
     id: number,
};
const Cell = ({ id }: CellProps) => {
    const handleClick = () => {
        console.log(`Clicked on Pokemon with ID: ${id}`);
    }
    return(
        <div key={id} className="cell" onClick={handleClick}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        </div>
    )
}
export default Cell;