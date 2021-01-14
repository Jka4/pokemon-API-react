import React, { Suspense } from "react";
import Paper from "@material-ui/core/Paper";

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
			<Suspense fallback={placeholder}>
				<img src={bigImage.imageHQ} className='bigImage' alt="" />
			</Suspense>
		</Paper >
	</>);
};

export default BigImage;
