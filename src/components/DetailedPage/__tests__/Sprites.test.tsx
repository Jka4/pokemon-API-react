import Sprites from '../views/Sprites';

import { mount } from 'enzyme';

describe('<Sprites/> ', () => {
  const fakeData = {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/168.png',
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/168.png',
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/168.png',
  };

  const container = mount(<Sprites sprites={fakeData} />);

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
