import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '@SearchInput';
import renderer from 'react-test-renderer';

describe('SearchInput', () => {
	test('renders SearchInput component', () => {
		render(<SearchInput />);
	});
});

it('renders correctly', async () => {
	const tree = renderer
		.create(<SearchInput />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
