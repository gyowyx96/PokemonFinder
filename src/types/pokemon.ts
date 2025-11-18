export type FlavorTextEntry = {
    language: {
        name: string;
    };
    flavor_text: string;
};

export type PokemonType = {
    name: string;
    height: number;
    weight: number;
    isShiny: boolean;
    flavor_text_entries: FlavorTextEntry[];
    sprites: {
        front_default: string;
        front_shiny: string;
    };
};

export type SelectedPokemonType = {
    nome: string;
    pos: { x: number; y: number };
};
