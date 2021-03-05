import * as React from 'react';
import { mount } from 'enzyme';

import Logo from '../views/Logo';

describe('<Logo />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
