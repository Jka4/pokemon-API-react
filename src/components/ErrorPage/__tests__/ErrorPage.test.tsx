import * as React from 'react';

import ErrorPage from '../ErrorPage';

import { mount, shallow } from 'enzyme';

describe('<ErrorPage/> ', () => {
  const container = mount(<ErrorPage />);

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
