import React from 'react';
import GetButton from '@GetButton';
import renderer from 'react-test-renderer';

it('GetButton renders correctly', async () => {
	const tree = renderer
		.create(<GetButton />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
