import React, { lazy } from "react";
import Paper from "@material-ui/core/Paper";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

type Props = {
	bigImage: any;
};

const BigImage: React.FC<Props> = ({ bigImage = {} }: Props) => {

	const placeholder = () => {
		return (<>
			<img src={bigImage.placeholderBase64} className="bigImage placeholderBase64" alt="" />
		</>)
	}

	return (<>
		<Paper elevation={3} >
			<ImageContainer url={bigImage.imageHQ} cn={"bigImage"} fallback={placeholder()} />
		</Paper >
	</>);
};

export default BigImage;
