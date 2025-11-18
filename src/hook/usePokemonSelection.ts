import { useContext } from "react"
import SelectedPokemonContext from "../contexts/SelectedPokemonContext"

const usePokemonSelection = () => {
    const pokemonCtx = useContext(SelectedPokemonContext);
    if(!pokemonCtx) throw new Error("usePokemonSelection must be used within a SelectedPokemonProvider");   
    return pokemonCtx
}
export default usePokemonSelection