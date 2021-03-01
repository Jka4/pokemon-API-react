import * as React from 'react';

import PokemonPageAll from '../index';

import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import POKEMON from 'utils/pokemonDataArray';

const mockStore = configureMockStore([thunk]);

describe('<PokemonPageAll/> ', () => {
  const store = mockStore({ pokemonArr: POKEMON });

  const container = mount(
    <BrowserRouter basename="/">
      <Provider store={store}>
        <PokemonPageAll />
      </Provider>
    </BrowserRouter>,
  );

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
