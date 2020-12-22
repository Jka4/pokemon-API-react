import React from "react";
import { useImage } from "react-image";
import PropTypes from "prop-types";

import ErrorBoundary from "@ErrorBoundary";

const ImageContainer = ({ url, cn }) => {
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

ImageContainer.propTypes = {
  cn: PropTypes.string,
  url: PropTypes.string,
};
