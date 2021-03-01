import * as React from 'react';

import Abilities from '../views/Abilities';

import { mount } from 'enzyme';

describe('<Abilities/> ', () => {
  it('with data', () => {
    const fakeData = [
      {
        ability: {
          name: 'swarm',
          url: 'https://pokeapi.co/api/v2/ability/68/',
        },
      },
      {
        ability: {
          name: 'insomnia',
          url: 'https://pokeapi.co/api/v2/ability/15/',
        },
      },
    ];
    const container = mount(<Abilities abilities={fakeData} />);
    expect(container).toMatchSnapshot();
  });

  it('without data', () => {
    const container = mount(<Abilities abilities={[]} />);
    expect(container).toMatchSnapshot();
  });
});
