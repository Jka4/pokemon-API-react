import * as React from 'react';

import ItemsList from '../views/ItemsList';

import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([thunk]);

describe('<ItemsList/> ', () => {
  it('renders correctly', () => {
    const pokemon = {
      id: 565,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png',
      imageHQ:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png',
      name: 'carracosta',
      order: 665,
      placeholderBase64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABfUlEQVQ4T2NkIBMwYtX3nwEs/p+BgYGREUxhAOwaiXAFVo0BDQoCG+b8+ZmS+014Tvm7JwRtXLWKgTksjOFvzSru0v//2E0Zmb6fbgn73j3zjDFrusnZ38gGoNjYsJ+BpcGR4U/mKqE6FfV3jU9vch/uC9MIYmA4+6ahgYGpoYHhH0wzXGNoaCjz6tWr/zLUBhh3a786oSD5nvH2Kxnm1//Pbu0Pe+cTuiqUeXXY6r8YGhtWabE1hF37VbJfJTlKVGGOwE+er8c+f+N6wb7rg5wlg2gYA8NfhwYHlgMNB/6ANMNsBNH/GRj8pNwbnkx3tXvmx8r6kYFBgIHh5RNFhhXrhVbc4+KpZJiw4wEDKKoYGf5DNDYwMDE0MPyTSbDTffL9v4ez0OtXGpJ/hB9xcqq9fct2//ZHQVYe3v8n73ft3Q1TiwgcqEl4oxBJDWo8gmx+ZszcIMX7/5nkZ0YpNd7/Bw4yMHx+9pnxrJTvX4aGBsxQJSKxoCghO8kBALL4iw/htJjEAAAAAElFTkSuQmCC',
      weight: 810,
    };

    const store = mockStore({ randomPokemon: [pokemon] });

    const wrapper = mount(
      <BrowserRouter basename="/">
        <Provider store={store}>
          <ItemsList />
        </Provider>
      </BrowserRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
