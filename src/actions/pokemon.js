import store from 'Store/store';


export function addRandomPokemon(randomPokemonFromArr) {
	return store.dispatch({ type: 'ADD_RANDOM_POKEMON', randomPokemonFromArr });
}


export function clearRandomPokemon() {
	return store.dispatch({ type: 'CLEAR_RANDOM_POKEMON' })
}

