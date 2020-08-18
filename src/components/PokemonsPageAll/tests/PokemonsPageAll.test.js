import React from "react";
import { render } from "@testing-library/react";
import PokemonsPageAll from "@PokemonsPageAll";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

it("AllPokemonsPage renders correctly", async () => {
  const tree = renderer
    .create(
      <Router>
        <PokemonsPageAll />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
