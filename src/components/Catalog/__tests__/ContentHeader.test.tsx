import * as React from 'react';

import ContentHeader, { Title } from '../views/ContentHeader';

import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('<Catalog/> ', () => {
  it('renders correctly', () => {
    const container = mount(
      <MemoryRouter initialEntries={['/catalog/big']}>
        <ContentHeader />
      </MemoryRouter>,
    );
    const title = container.find(Title).text();
    expect(title).toMatchSnapshot();
  });

  it('renders with home button', () => {
    const container = mount(
      <MemoryRouter initialEntries={['/catalog/small']}>
        <ContentHeader />
      </MemoryRouter>,
    );

    const title = container.find(Title).text();
    expect(title).toMatchSnapshot();
  });
});
