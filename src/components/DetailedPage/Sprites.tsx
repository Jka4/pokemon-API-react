import React, { lazy } from "react";
import Paper from "@material-ui/core/Paper";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

type Props = {
	sprites: any;
};


const Sprites: React.FC<Props> = ({ sprites = {} }: Props) => {
	console.log("🚀 ~ file: Sprites.tsx ~ line 13 ~ sprites", sprites)
	const fallbackSprites = () => {
		return (
			<SkeletonTheme color="#6cff79" highlightColor="yellow">
				<Skeleton className="solo" circle={true} height={60} width={60} />
			</SkeletonTheme>
		);
	};

	return (<>
		<div className="imagesLine">
			{sprites ? (
				Object.keys(sprites).map((spriteName: string) => (
					<>
						{sprites[spriteName] && (
							<Paper elevation={3} className="block" key={spriteName}>
								<ImageContainer
									url={sprites[spriteName]}
									cn={sprites[spriteName]}
									fallback={fallbackSprites()}
								/>
							</Paper>
						)}
					</>
				))
			) : (
					<>
						{[1, 2, 3, 4].map((
							n: number, // trash code just for generate placeholder
						) => (
							<Paper elevation={3} key={n} className="block">
								{fallbackSprites()}
							</Paper>
						))}
					</>
				)}
		</div>
	</>);
};

export default Sprites;
