import React, { Suspense } from "react";
import Paper from "@material-ui/core/Paper";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type Props = {
	sprites: any;
};

const Sprites: React.FC<Props> = ({ sprites = {} }: Props) => {

	const SpritesPlaceholders = () => {
		return (<>
			{[1, 2, 3, 4].map((el) => (
				<Paper key={el} elevation={3} className="block">
					<SkeletonTheme color="#6cff79" highlightColor="yellow">
						<Skeleton className="solo" circle={true} height={60} width={60} />
					</SkeletonTheme>
				</Paper>
			))}
		</>);
	};

	return (<>
		<div className="imagesLine">

			<Suspense fallback={SpritesPlaceholders()} >
				{Object.keys(sprites).map((spriteName: string) => (
					<div key={spriteName}>
						{sprites[spriteName] && (
							<Paper elevation={3} className="block">
								<img src={sprites[spriteName]} alt={sprites[spriteName]} className={sprites[spriteName]} />
							</Paper>
						)}
					</div>
				))}
			</Suspense>

		</div>
	</>);
};

export default Sprites;
