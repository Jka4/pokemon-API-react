import React from "react";
import { useImage } from "react-image";

import ErrorBoundary from "../../utils/ErrorBoundary";

interface ImageContainerProps {
  url: string;
  cn: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  url = "",
  cn = "",
}) => {
  const ImageWrapper = () => {
    const { src } = useImage({ srcList: url });

    return (
      <>
        <img src={src} alt={cn} className={cn} />
      </>
    );
  };

  return (
    <ErrorBoundary>
      <ImageWrapper />
    </ErrorBoundary>
  );
};

export default ImageContainer;
