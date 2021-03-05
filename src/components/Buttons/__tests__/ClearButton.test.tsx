import ClearButton from '../views/ClearButton';

import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const store = mockStore({ randomPokemon: [] });

describe('<ClearButton/> ', () => {
  const container = mount(
    <Provider store={store}>
      <ClearButton />
    </Provider>,
  );

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
