import React from 'react';
import MainContainer from '@MainContainer';
import renderer from 'react-test-renderer';

it('MainContainer renders correctly', async () => {
	const tree = renderer
		.create(<MainContainer />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
