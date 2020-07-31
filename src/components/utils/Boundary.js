import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Boundary = (props) => {
	return (
		<React.Fragment>
			<ErrorBoundary fallback={<span className='err' >Ooops...</span>} >
				{props.component}
			</ErrorBoundary>
		</React.Fragment>
	)
}

export default Boundary;
