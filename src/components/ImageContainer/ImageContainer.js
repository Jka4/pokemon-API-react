import React from "react";
import { useImage } from "react-image";
import ErrorBoundary from "@ErrorBoundary";

const ImageContainer = (props) => {
  const ImageWrapper = (props) => {
    const {
      props: { url, cn },
    } = props;
    const { src } = useImage({
      srcList: url,
    });

    return (
      <>
        <img loading="lazy" src={src} alt={cn} className={cn} />
      </>
    );
  };

  return (
    <ErrorBoundary>
      <ImageWrapper props={props} />
    </ErrorBoundary>
  );
};

export default ImageContainer;
