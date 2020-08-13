import React from 'react';
import HeaderLine from '@HeaderLine';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";

it('HeaderLine renders correctly', async () => {
	const tree = renderer
		.create(<Router><HeaderLine /></Router>)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
