import React from "react";
import Paper from "@material-ui/core/Paper";

type Props = {
	bigImage: any;
};

const BigImage: React.FC<Props> = ({ bigImage = {} }: Props) => {

	return (<>
		<Paper elevation={3} >
			{bigImage && (
				<img src={bigImage.imageHQ} className="bigImage" loading='lazy' alt="" />
			)}
		</Paper >
	</>);
};

export default BigImage;
