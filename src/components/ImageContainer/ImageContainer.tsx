import { useEffect, useState } from 'react';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import styled from 'styled-components';

import { JSXElement } from 'types/index';

type PropsType = {
  url?: string;
  cn?: string;
  fallback?: JSXElement | Function;
};

type ReadyType = { ready: boolean };

const ImageContainer = ({ url, cn, fallback }: PropsType) => {
  const [ready, setReady] = useState<boolean>(false);

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
        <FallbackStyled ready={ready}>{fallback}</FallbackStyled>
        <IMG src={url} alt={cn} className={cn} loading="lazy" ready={ready} />
      </ErrorBoundary>
    </>
  );
};

export const IMG = styled.img`
  display: ${(props: ReadyType) => (props.ready ? 'block' : 'none')};
`;

export const FallbackStyled = styled.div`
  display: ${(props: ReadyType) => (props.ready ? 'none' : 'block')};
`;

export default ImageContainer;
