import * as React from 'react';

import HeaderLine from '../HeaderLine';

import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { NavLink } from 'react-router-dom';

describe('<HeaderLine/> ', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({ pokemonArr: [] });

  it('renders without home button', () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <HeaderLine />
        </MemoryRouter>
      </Provider>,
    );

    const svgPath = container.find(NavLink).find('path');
    expect(svgPath).toMatchSnapshot();
  });

  it('renders with home button', () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/404']}>
          <HeaderLine />
        </MemoryRouter>
      </Provider>,
    );

    const svgPath = container.find(NavLink).find('path');
    expect(svgPath).toMatchSnapshot();
  });
});
