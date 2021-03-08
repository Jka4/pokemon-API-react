import NonSupportPlaceholder from '../NonSupportPlaceholder';

import { mount } from 'enzyme';

describe('<NonSupportPlaceholder/> ', () => {
  const container = mount(<NonSupportPlaceholder />);

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });
});
