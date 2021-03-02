import React from 'react';

import { PokesTypes } from 'types/index';
import styled from 'styled-components';
import ImageContainer from 'components/ImageContainer/ImageContainer';

interface PropsType {
  bigImage?: PokesTypes;
}

const BigImage: React.FC<PropsType> = ({ bigImage }: PropsType) => {
  const biImageDefaultValue =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABg0lEQVQ4T2NkIBMwYtEHE/uPz0x0jSA+WMP+/Q0sDAwHGBwdHf4xMDT8QzcEWSNUk44sA8OVvwwMDM9giv//D2VmZFwNEoMDuMb9DQwsjg0Mf/qzmWMVpC0tAyoTarYtW5LnHf37PgPD0YUgHf8ZGBgZoS6Ca1y1KpQ5LGz131WZDMbmiQmnOXlZGK9fvbH96UfuuW4WTBFndj5K9yi6+u7/fwZGRkaG/0g2OrA4Nhz4s67S1N7K8esBQSYGhgu77s3RiTc3/cLEo71v20OlyOIrj///b2BiZGz4B9f4/z8DEyMjw7/OTj2ZeCvuKyL8jPwP3jPfeXfpwrtDFz6HlcxleAhTA3I2wsb9DiyOjgf+HFtmEGBiLbv+PzMTw/enrxhmNR2fWbaVIQNZE1aNeycqJErJcFfycDNc+/rmg75GzFNzBgaGVw0NDEwNDQzwaMGSAER5GBhe/2RgYPhtbSwld/Tss0fYEgLOBAALBOQowBqP8MiGxBU42tCdh1cjsWkeAIUZlA82LlHPAAAAAElFTkSuQmCC';

  const placeholder = () => {
    return <img src={bigImage?.placeholderBase64} alt="" style={{ filter: 'blur(18px)' }} />;
  };

  return (
    <ImageWrapper>
      <ImageContainer url={bigImage?.imageHQ || biImageDefaultValue} cn={'deBlur'} fallback={placeholder} />
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
