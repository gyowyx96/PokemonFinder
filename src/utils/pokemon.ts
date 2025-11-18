export const pokemonSelect = () => {
    const target = [
      {nome: "crustle", pos: {x: 887, y: 286} },
      {nome: "regigigas", pos: {x: 232, y: 580} },
      {nome: "braviary", pos: {x: 1077, y: 336} },
      {nome: "empoleon", pos: {x: 192, y: 370} },
    ]
    const getRandomElement = <T,>(arr: T[]) => {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const obj = getRandomElement(target);
    return obj;
}
