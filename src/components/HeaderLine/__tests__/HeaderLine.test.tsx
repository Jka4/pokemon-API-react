import * as React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import HeaderLine from '../HeaderLine';

import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

describe('<HeaderLine/> ', () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  const mockStore = configureMockStore([thunk]);

  it('renders correctly', async () => {
    const store = mockStore({ pokemonArr: [] });

    await act(async () => {
      ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter basename="/">
            <HeaderLine />
          </BrowserRouter>
        </Provider>,
        await container,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
