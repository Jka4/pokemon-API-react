import { Suspense } from "react";
import { useImage } from "react-image";

import ErrorBoundary from "utils/ErrorBoundary";



type ImageContainerProps = {
  url: string;
  cn?: string;
  fallback?: any
}

const ImageContainer = ({ url, cn, fallback }: ImageContainerProps) => {
  const { src } = useImage({ srcList: url });

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={fallback}>
          {url && <img src={src} alt={cn} className={cn} loading='lazy' />}
        </Suspense>
      </ErrorBoundary>
    </>
  );
};





export default ImageContainer;



