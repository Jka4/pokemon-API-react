import React, { lazy, Suspense } from "react";
import Loader from 'react-loader-spinner'
import Tilt from "react-tilt";

const ImageContainer = lazy(() => import('../ImageContainer/ImageContainer.js'));

const Logo = () => {
	return (
		<div className='getButtonLine'>
			<Tilt
				className='Tilt'
				options={{
					easing: "cubic-bezier(.03,.98,.52,.99)",
					scale: 1.2,
					max: 35
				}}>
				<div className='Tilt-inner'>
					<Suspense fallback={<Loader type="TailSpin" height={120}
						width={150} color={"red"}
					/>}>
						<ImageContainer url={'/images/pokemon.gif'} />
					</Suspense>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;