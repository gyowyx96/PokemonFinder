import { useRef } from "react";
import "./cell.scss";

type CellProps = {
    id: number;
    onPosition: (id: number, x: number, y: number) => void;
};

const Cell = ({ id, onPosition }: CellProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleLoad = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            onPosition(id, rect.left, rect.top + 250);
            console.log(`Cella ${id} posizione inviata: ${rect.left}, ${rect.top}`);
        }
    };

    return (
        <div ref={ref} className="cell">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                onLoad={handleLoad}
                alt={`pokemon-${id}`}
            />
        </div>
    );
};

export default Cell;