import * as React from 'react';

import ErrorBoundary from '../ErrorBoundary';
import { mount } from 'enzyme';

describe('<ErrorBoundary/> ', () => {
  const Something = () => null;

  it('should display an ErrorMessage if wrapped component throws', () => {
    const container = mount(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>,
    );

    const error = new Error('test');

    container.find(Something).simulateError(error);
    expect(container).toMatchSnapshot();
  });
});
