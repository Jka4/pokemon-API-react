import React from 'react';

import styled from 'styled-components';
import { ImageContainer } from 'components/ImageContainer/ImageContainer';

interface PropsType {
  imageHQ?: any;
  placeholderBase64?: any;
}

const BigImage: React.FC<PropsType> = ({ imageHQ, placeholderBase64 }: PropsType) => {
  return (
    <ImageWrapper>
      <ImageContainer
        url={imageHQ}
        cn={'deBlur'}
        fallback={<img src={placeholderBase64} alt="" style={{ filter: 'blur(18px)' }} />}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  background: #2196f3;
  border-radius: 5px;
  border: 1px solid black;
  width: 425px;
  height: 430px;
  overflow: hidden;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`;

export default BigImage;
