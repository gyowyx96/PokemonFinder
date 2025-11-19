import "./cell.scss"
type CellProps = { id: number };
const Cell = ({ id }: CellProps) => {
    return(
       <div key={id} className="cell"
            style={{ 
                backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`
            }}
        ></div>
    )
}
export default Cell;