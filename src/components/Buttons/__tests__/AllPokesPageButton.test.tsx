import * as React from 'react';

import AllPokesPageButton from '../views/AllPokesPageButton';

import { mount } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

describe('<AllPokesPageButton/> ', () => {
  const container = mount(
    <BrowserRouter basename="/">
      <AllPokesPageButton />
    </BrowserRouter>,
  );

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
