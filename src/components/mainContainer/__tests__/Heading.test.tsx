import * as React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Heading from '../views/Heading';

describe('<Heading />', () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders correctly', async () => {
    await act(async () => {
      ReactDOM.render(<Heading />, container);
      await expect(container).toMatchSnapshot();
    });
  });
});
