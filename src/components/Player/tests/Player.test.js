import React from 'react';
import { render } from '@testing-library/react';
import Player from '@Player';

test('renders learn react link', () => {
	const { getByText } = render(<Player />);
	const linkElement = getByText(/Play/i);
	expect(linkElement).toBeInTheDocument();
});
