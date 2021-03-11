import React, { useEffect, useState } from 'react';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import styled, { keyframes } from 'styled-components';

import { JSXElement } from 'types/index';

type PropsType = {
  url?: string;
  fallback?: JSXElement | Function;
};

type LoadType = { isLoaded: boolean };

const ImageContainer = ({ url = '', fallback }: PropsType) => {
  const [isLoaded, setReady] = useState<boolean>(false);
  const [isCached, setIsCached] = useState<boolean>(false);
  const flag = isCached || isLoaded;

  useEffect(() => {
    const img = new Image();
    img.onload = () => setReady(true);
    img.src = url;
    img.complete && setIsCached(true);

    return () => {
      setReady(false);
    };
  }, [url]);

  return (
    <>
      <ErrorBoundary>
        <IMG src={url} isLoaded={flag} />
        <FallbackStyled isLoaded={flag}>{fallback}</FallbackStyled>
      </ErrorBoundary>
    </>
  );
};

export const FallbackStyled = styled.div`
  filter: blur(18px);
  display: ${(props: LoadType) => (props.isLoaded ? 'none' : 'block')};
  width: auto;
  height: 100%;
  overflow: hidden;
`;

const deBlur = (props: any) => keyframes`
    from {
      filter: ${props.isLoaded && 'blur(18px)'};
    }

    to {
      filter: ${props.isLoaded && 'blur(0px)'};
    }
`;

export const IMG = styled.img`
  display: ${(props: LoadType) => (props.isLoaded ? 'block' : 'none')};
  width: auto;
  height: 100%;
  animation: 0.2s ${deBlur};
`;

export { ImageContainer };
