import * as React from 'react';

import ImageContainer from '../ImageContainer';

import { mount } from 'enzyme';

describe('<HeaderLine/> ', () => {
  const container = mount(
    <ImageContainer
      url={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
      cn="testClass"
    />,
  );

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
