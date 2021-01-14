import { useEffect, useState } from 'react';
import ErrorBoundary from 'utils/ErrorBoundary';

type ImageContainerProps = {
  url: string;
  cn?: string;
  fallback?: any;
};

const ImageContainer = ({ url, cn, fallback }: ImageContainerProps) => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setReady(true);
    img.src = url;

    return () => {
      setReady(false);
    };
  }, [url]);

  return (
    <>
      <ErrorBoundary>
        {!ready && <>{typeof fallback === 'function' ? fallback() : fallback}</>}

        <img src={url} alt={cn} className={cn} style={{ display: ready ? 'block' : 'none' }} />
      </ErrorBoundary>
    </>
  );
};

export default ImageContainer;
