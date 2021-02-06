
export function addRandomPokemon(randomPokemonFromArr) {
	return { type: 'ADD_RANDOM_POKEMON', randomPokemonFromArr }
}


export function clearRandomPokemon() {
	return { type: 'CLEAR_RANDOM_POKEMON' }
}

