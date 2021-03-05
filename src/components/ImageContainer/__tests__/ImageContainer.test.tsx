import * as React from 'react';

import ImageContainer, { IMG, FallbackStyled } from '../ImageContainer';

import { mount } from 'enzyme';
import { render } from '@testing-library/react';

describe('<HeaderLine/> ', () => {
  it('renders correctly', () => {
    const container = mount(
      <ImageContainer
        url={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
        cn="testClass"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('unmount component', () => {
    const { unmount } = render(
      <ImageContainer
        url={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
        cn="testClass"
      />,
    );

    unmount();
  });

  it('empty url', () => {
    const { unmount } = render(<ImageContainer cn="testClass" />);

    unmount();
  });

  it('image loaded TRUE', () => {
    const imageWrapper = mount(<IMG ready={true} />);
    const fallbackWrapper = mount(<FallbackStyled ready={true} />);

    expect(imageWrapper).toMatchSnapshot();
    expect(fallbackWrapper).toMatchSnapshot();
  });

  it('image loaded FALSE', () => {
    const imageWrapper = mount(<IMG ready={false} />);
    const fallbackWrapper = mount(<FallbackStyled ready={false} />);

    expect(imageWrapper).toMatchSnapshot();
    expect(fallbackWrapper).toMatchSnapshot();
  });
});
