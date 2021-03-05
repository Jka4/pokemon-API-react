import PAGE_404 from '../PAGE_404';

import { mount } from 'enzyme';

describe('<ErrorPage/> ', () => {
  const container = mount(<PAGE_404 />);

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
