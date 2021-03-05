import BigImage from '../views/BigImage';

import { mount } from 'enzyme';

describe('<BigImage/> ', () => {
  const fakeData = {
    id: 168,
    name: 'ariados',
    weight: 335,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
    imageHQ: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png',
    chain: [
      {
        species_name: 'spinarak',
      },
      {
        species_name: 'ariados',
      },
    ],
    placeholderBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABiklEQVQ4T2NkIBMw4tAHEwfR/7CpwaYRJPafkEPQNYI1+ZqZKX7n4/vL/OcP284DBx4wMDD8QTcIRWNa2kzWWbPSfzPwiqQyfH6jwsDAcJaBgWGVg4MDy4EDB1A0wzWuWrWKOSws7G/07G0ydZeqtjKwy+kdl3bJSijMmw61DcULyDaCJVbMmjUpiP9m7tOfAv9OXfrI9OnMugmpB+4V/mdgYGRE8jtYI8y246ePu9w+c73LSOe5AjMTs8DRzIrfSqmT2H5oaJZ6ubr27N+/n8XR0RHsZLDG////MzIyMv6/fWIJ39zN7/oNhG+6B3grSb96/5vh/P5vDDzapnOc/XxT/69axcwYFvYXQ+OqVTP5v31izXr9/Im7s+FvEaa/X/9ceaygL6qqWebu7toNcxlcI7KtIHZnZ69FeXnxRQYGhu+LFyyL/PHp8eHUvPInDQ0NTA0NDeAEgRId//8zMB5o3M/s2ADxBzKAeQcmhjXJQZ0ENnnVqlVMoaGh/0BhgGwQrrRKKMUxAADfoqQPKXvh9QAAAABJRU5ErkJggg==',
    order: 250,
    base_experience: 140,
  };

  // it('renders with data', () => {
  //   const container = mount(<BigImage poke={fakeData} />);
  //   expect(container).toMatchSnapshot();
  // });

  it('renders without data', () => {
    const container = mount(<BigImage imageHQ={fakeData.imageHQ} placeholderBase64={fakeData.placeholderBase64} />);
    expect(container).toMatchSnapshot();
  });
});
