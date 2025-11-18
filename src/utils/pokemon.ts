export const pokemonSelect = () => {
    const target = [
      {name: "crustle", pos: {x: 887, y: 286}, },
      {name: "regigigas", pos: {x: 232, y: 580}, shiny: false },
      {name: "braviary", pos: {x: 1077, y: 336}},
      {name: "feebas", pos: {x: 918, y: 498} },
      {name: "charizard", pos: {x: 274, y: 306} },
      {name: "bronzong", pos: {x:1100, y: 456}, shiny: true },
      {name: "lapras", pos: {x:1272, y:205} },
    ]
    const getRandomElement = <T,>(arr: T[]) => {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const obj = getRandomElement(target);
    return obj;
}
