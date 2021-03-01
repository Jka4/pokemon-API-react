import * as React from 'react';

import ErrorPage from '../ErrorPage';

import { mount } from 'enzyme';

describe('<ErrorPage/> ', () => {
  const container = mount(<ErrorPage />);

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
