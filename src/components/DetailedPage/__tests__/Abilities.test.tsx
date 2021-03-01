import * as React from 'react';

import Abilities from '../views/Abilities';

import { mount, shallow } from 'enzyme';

describe('<Abilities/> ', () => {
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

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
