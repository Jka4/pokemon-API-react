import React, { useEffect, useState } from 'react';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import styled from 'styled-components';

import { JSXElement } from 'types/index';

type PropsType = {
  url?: string;
  fallback?: JSXElement | Function;
};

type ReadyType = { ready: boolean };

const ImageContainer = ({ url = '', fallback }: PropsType) => {
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
        <IMG src={url} loading="lazy" ready={ready} />
        <FallbackStyled ready={ready}>{fallback}</FallbackStyled>
      </ErrorBoundary>
    </>
  );
};

export const FallbackStyled = styled.div`
  display: ${(props: ReadyType) => (props.ready ? 'none' : 'block')};
  width: auto;
  height: 100%;
  filter: blur(18px);
  overflow: hidden;
`;

export const IMG = styled.img`
  display: ${(props: ReadyType) => (props.ready ? 'block' : 'none')};
  width: auto;
  height: 100%;
  animation: 0.2s linear 0s deBlurAnimation;

  @keyframes deBlurAnimation {
    from {
      filter: blur(18px);
    }

    to {
      filter: blur(0px);
    }
  }
`;

export { ImageContainer };
