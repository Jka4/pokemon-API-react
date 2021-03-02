import { useEffect, useState } from 'react';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import styled from 'styled-components';

import { JSXElement } from 'types/index';

type PropsType = {
  url?: string;
  cn?: string;
  fallback?: JSXElement | Function;
  canShow?: boolean;
};

const ImageContainer = ({ url, cn, fallback }: PropsType) => {
  const [imgReady, setReady] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setReady(true);
    img.src = url || '';

    return () => {
      setReady(false);
    };
  }, [url]);

  return (
    <>
      <ErrorBoundary>
        <FallbackStyled canShow={imgReady}>{typeof fallback === 'function' ? fallback() : fallback}</FallbackStyled>
        <IMG src={url} alt={cn} className={cn} loading="lazy" canShow={imgReady} />
      </ErrorBoundary>
    </>
  );
};

const IMG = styled.img`
  display: ${(props: PropsType) => (props.canShow ? 'block' : 'none')};
`;

const FallbackStyled = styled.div`
  display: ${(props: PropsType) => (props.canShow ? 'none' : 'block')};
`;

export default ImageContainer;
