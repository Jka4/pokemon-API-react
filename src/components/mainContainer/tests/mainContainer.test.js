import React from 'react';
import MainContainer from '@MainContainer';
import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";

it('MainContainer renders correctly', async () => {

	act(() => {
		const tree = renderer
			.create(<Router><MainContainer /></Router >)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});



});
