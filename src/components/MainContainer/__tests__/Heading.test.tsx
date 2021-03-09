import { mount } from 'enzyme';

import Heading from '../views/Heading';

describe('<Heading />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Heading />);
    expect(wrapper).toMatchSnapshot();
  });
});
