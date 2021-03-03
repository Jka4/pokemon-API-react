import * as React from 'react';

import { mount } from 'enzyme';

import Player from '../Player';

describe('<Player />', () => {
  it('renders correctly', () => {
    const container = mount(<Player />);
    expect(container).toMatchSnapshot();
  });
});
