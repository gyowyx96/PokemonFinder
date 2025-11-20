export type FlavorTextEntry = {
    language: {
        name: string;
    };
    flavor_text: string;
};

export type PokemonType = {
    name: string;
    id: number;
    height: number;
    weight: number;
    shiny: boolean;
    flavor_text_entries: FlavorTextEntry[];
    sprites: {
        front_default: string;
        front_shiny: string;
    };
};

/* export type SelectedPokemonType = {
    name: string;
    pos: { x: number; y: number };
    shiny?: boolean;
}; */
