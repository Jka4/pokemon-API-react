import * as React from 'react';

import EvolutionForms from '../views/EvolutionForms';
import POKEMON from 'utils/pokemonDataArray';

import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

describe('<EvolutionForms/> ', () => {
  const container = mount(
    <BrowserRouter basename="/">
      <EvolutionForms currentPokemon={'ariados'} pokemonArr={POKEMON} />
    </BrowserRouter>,
  );

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
