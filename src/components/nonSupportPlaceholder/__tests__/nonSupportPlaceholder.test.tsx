import * as React from 'react';

import NonSupportPlaceholder from '../NonSupportPlaceholder';

import { mount, shallow } from 'enzyme';

describe('<NonSupportPlaceholder/> ', () => {
  const container = mount(<NonSupportPlaceholder />);

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
