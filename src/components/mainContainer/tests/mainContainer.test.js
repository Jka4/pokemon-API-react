import React from 'react';
import { render } from '@testing-library/react';
import MainContainer from '@MainContainer';

describe('MainContainer', () => {
	test('renders MainContainer component', () => {
		render(<MainContainer />);
	});
});
