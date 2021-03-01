import * as React from 'react';

import ImageContainer from '../ImageContainer';

import { mount, shallow } from 'enzyme';

describe('<HeaderLine/> ', () => {
  const container = mount(<ImageContainer url="url" cn="cn" />);

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
