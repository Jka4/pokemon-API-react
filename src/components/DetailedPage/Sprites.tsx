import React, { lazy } from "react";
import Paper from "@material-ui/core/Paper";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type Props = {
	sprites: any;
};

const Sprites: React.FC<Props> = ({ sprites = {} }: Props) => {

	const fallbackSprites = () => {
		return (
			<SkeletonTheme color="#6cff79" highlightColor="yellow">
				<Skeleton className="solo" circle={true} height={60} width={60} />
			</SkeletonTheme>
		);
	};

	const SpritesPlaceholders = () => {
		return (<>
			<Paper elevation={3} className="block">
				{fallbackSprites()}
			</Paper>
			<Paper elevation={3} className="block">
				{fallbackSprites()}
			</Paper>
			<Paper elevation={3} className="block">
				{fallbackSprites()}
			</Paper>
			<Paper elevation={3} className="block">
				{fallbackSprites()}
			</Paper>
		</>);
	};

	const SpritesImg = () => {
		return (
			Object.keys(sprites).map((spriteName: string) => (
				<div key={spriteName}>
					{sprites[spriteName] && (
						<Paper elevation={3} className="block">
							<ImageContainer
								url={sprites[spriteName]}
								cn={sprites[spriteName]}
								fallback={fallbackSprites()}
							/>
						</Paper>
					)}
				</div>
			))
		);
	};

	const haveSprites = Object.keys(sprites).length !== 0;

	return (<>
		<div className="imagesLine">
			{haveSprites ? SpritesImg() : SpritesPlaceholders()}
		</div>
	</>);
};

export default Sprites;
