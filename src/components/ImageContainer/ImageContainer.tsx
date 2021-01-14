import { Suspense } from "react";
import { Img, resource } from 'react-suspense-img';

import ErrorBoundary from "utils/ErrorBoundary";


interface ImageContainerProps {
  url: string;
  cn?: string;
  fallback?: any
}

const ImageContainer = ({ url, cn, fallback }: ImageContainerProps) => {
  resource.preloadImage(url);

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={fallback}>
          <Img src={url} className={cn} alt={cn} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ImageContainer;



