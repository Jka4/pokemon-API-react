import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import MainContainer from '../MainContainer';
import { BrowserRouter as Router } from "react-router-dom";
import { getRandomPokemon } from "../../utils/API";

const PokemonCardFetch = () => {
	const handleClick = () => {
		getRandomPokemon(1);
	}

	return (
		<Router>
			<button onClick={() => handleClick()} >GET POKEMON</button>
			<MainContainer />
		</Router>
	)
}

test('Fetch makes an API call', async () => {

	render(<PokemonCardFetch />)
	fireEvent.click(screen.getByText(/GET POKEMON/i))

	const greetingNode = await screen.findByTestId('testId')
	expect(greetingNode).toHaveTextContent('bulbasaur')
})
