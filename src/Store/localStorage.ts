type stateType = {
  randomPokemon: any[];
  playing: boolean;
  pokemonArr: any[];
};

export const saveState = (state: stateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('pokemon_state', serializedState);
  } catch {
    console.log('Ooops, state not saved to localStorage');
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('pokemon_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
