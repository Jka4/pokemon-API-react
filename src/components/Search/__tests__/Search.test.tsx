import Search from '../Search';

import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import POKEMON from 'utils/pokemonDataArray';

const mockStore = configureMockStore([thunk]);

describe('<Search/> ', () => {
  const store = mockStore({ pokemonArr: POKEMON });

  const container = mount(
    <Provider store={store}>
      <Search />
    </Provider>,
  );

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
