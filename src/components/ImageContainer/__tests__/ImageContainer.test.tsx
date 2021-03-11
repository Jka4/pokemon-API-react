import { ImageContainer, IMG, FallbackStyled } from '../ImageContainer';

import { mount } from 'enzyme';
import { render } from '@testing-library/react';

describe('<HeaderLine/> ', () => {
  it('renders correctly', () => {
    const container = mount(
      <ImageContainer
        url={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('unmount component', () => {
    const { unmount } = render(
      <ImageContainer
        url={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
      />,
    );

    unmount();
  });

  it('empty url', () => {
    const { unmount } = render(<ImageContainer />);

    unmount();
  });

  it('image loaded TRUE', () => {
    const imageWrapper = mount(<IMG isLoaded={true} />);
    const fallbackWrapper = mount(<FallbackStyled isLoaded={true} />);

    expect(imageWrapper).toMatchSnapshot();
    expect(fallbackWrapper).toMatchSnapshot();
  });

  it('image loaded FALSE', () => {
    const imageWrapper = mount(<IMG isLoaded={false} />);
    const fallbackWrapper = mount(<FallbackStyled isLoaded={false} />);

    expect(imageWrapper).toMatchSnapshot();
    expect(fallbackWrapper).toMatchSnapshot();
  });
});
