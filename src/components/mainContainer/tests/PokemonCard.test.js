import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MainContainer from "@MainContainer";
import { BrowserRouter as Router } from "react-router-dom";
import { getRandomPokemon } from "@APIutils";
import renderer from "react-test-renderer";

describe("PokemonCardFetch", () => {
  const PokemonCardFetch = () => {
    getRandomPokemon(1);

    return (
      <Router>
        <MainContainer />
      </Router>
    );
  };

  test("Fetch makes an API call", async () => {
    getRandomPokemon(1);

    render(<PokemonCardFetch />);
    const greetingNode = await screen.findByTestId("testId");
    expect(greetingNode).toHaveTextContent("bulbasaur");
  });

  it("MainContainer renders correctly", async () => {
    getRandomPokemon(1);

    const tree = renderer.create(<PokemonCardFetch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
