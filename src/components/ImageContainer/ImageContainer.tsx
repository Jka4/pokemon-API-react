import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { JSXElement } from 'types/index';

type PropsType = {
  url?: string;
  fallback?: JSXElement | Function;
};

type LoadType = { isLoaded: boolean };

const ImageContainer = ({ url = '', fallback }: PropsType) => {
  const [isLoaded, setReady] = useState<boolean>(false);

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
      <IMG src={url} isLoaded={isLoaded} />
      <FallbackStyled isLoaded={isLoaded}>{fallback}</FallbackStyled>
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
