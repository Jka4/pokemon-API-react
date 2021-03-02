import * as React from 'react';

import ContentHeader, { InnerBlock, Title } from '../views/ContentHeader';

import { mount } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';

describe('<Catalog/> ', () => {
  const container = mount(
    <BrowserRouter>
      <ContentHeader />
    </BrowserRouter>,
  );

  it('renders correctly', () => {
    const title = container.find(Title).html();
    expect(title).toMatchSnapshot();
  });

  it('render after click', () => {
    container.find(InnerBlock).simulate('click');
    const title = container.find(Title).html();
    expect(title).toMatchSnapshot();
  });
});
