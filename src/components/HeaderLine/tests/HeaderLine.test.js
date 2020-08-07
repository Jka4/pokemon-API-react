import React from 'react';
import HeaderLine from '@HeaderLine';
import renderer from 'react-test-renderer';

it('HeaderLine renders correctly', async () => {
	const tree = renderer
		.create(<HeaderLine />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
