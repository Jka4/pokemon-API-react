import React, { Suspense } from "react";
import { useImage } from "react-image";

import ErrorBoundary from "utils/ErrorBoundary";

interface ImageContainerProps {
  url: string;
  cn?: string;
  fallback?: any
}

const ImageContainer = ({ url, cn, fallback }: ImageContainerProps) => {

  const ImageWrapper = () => {
    const { src } = useImage({ srcList: url });

    return (
      <>
        <img src={src} alt={cn} className={cn} />
      </>
    );
  };

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={fallback}>
          <ImageWrapper />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ImageContainer;
