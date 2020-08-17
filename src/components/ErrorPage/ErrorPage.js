import React from "react";
import './styles/Style.scss'

const ErrorPage = () => {

	return (
		<div className='errorPage' >
			<div className="errCode">404</div>
			<div className="image">
				<img src="https://github.com/Jka4/pokemon-API-react/blob/master/public/images/404.png?raw=true" alt="" />
			</div>
			<div className="description">Page Not Found</div>

		</div>
	);
}

export default ErrorPage;
