import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
	test('renders SearchInput component', () => {
		render(<SearchInput />);
	});
});