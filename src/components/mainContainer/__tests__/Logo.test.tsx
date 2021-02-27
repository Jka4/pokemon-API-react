import * as React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Logo from '../views/Logo';

describe('<Logo />', () => {
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
      ReactDOM.render(<Logo />, await container);
      await expect(container).toMatchSnapshot();
    });
  });
});
