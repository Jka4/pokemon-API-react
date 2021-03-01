import * as React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Player from '../Player';

describe('<Player />', () => {
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
      ReactDOM.render(<Player />, container);
      const button = await container.querySelector('button');
      expect(button).toMatchSnapshot();
    });
  });

  it('Player click', async () => {
    await act(async () => {
      ReactDOM.render(<Player />, container);
      const button = await container.querySelector('button');
      await button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(button).toMatchSnapshot();
    });
  });
});
