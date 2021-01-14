import React, { lazy } from "react";
import Paper from "@material-ui/core/Paper";

const ImageContainer = lazy(() => import("components/ImageContainer/ImageContainer"));

type Props = {
	bigImage: any;
};

const BigImage: React.FC<Props> = ({ bigImage = {} }: Props) => {
	const { imageHQ, placeholderBase64 } = bigImage;

	const placeholder = () => {
		return (<>
			<img src={placeholderBase64} className="bigImage " alt="" style={{ filter: 'blur(18px)' }} />
		</>)
	}


	return (<>
		<Paper elevation={3} >
			<ImageContainer
				url={imageHQ}
				cn={"bigImage"}
				fallback={placeholder}
			/>
		</Paper >
	</>);
};

export default BigImage;
