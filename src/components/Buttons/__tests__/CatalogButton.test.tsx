import CatalogButton from '../views/CatalogButton';

import { mount } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

describe('<CatalogButton/> ', () => {
  const container = mount(
    <BrowserRouter basename="/">
      <CatalogButton />
    </BrowserRouter>,
  );

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
