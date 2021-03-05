import Stats from '../views/Stats';

import { mount } from 'enzyme';

describe('<Stats/> ', () => {
  it('renders correctly', () => {
    const fakeData = [
      {
        base_stat: 70,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 40,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ];

    const container = mount(<Stats stats={fakeData} weight={123} />);

    expect(container).toMatchSnapshot();
  });

  it('without data', () => {
    const container = mount(<Stats stats={[]} weight={123} />);
    expect(container).toMatchSnapshot();
  });
});
