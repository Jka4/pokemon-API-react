import React, { lazy } from 'react';
import Paper from '@material-ui/core/Paper';

import { Pokes } from 'types/index';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

interface RootType {
  bigImage?: Pokes;
}

const BigImage: React.FC<RootType> = ({ bigImage }: RootType) => {
  const biImageDefaultValue = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABg0lEQVQ4T2NkIBMwYtEHE/uPz0x0jSA+WMP+/Q0sDAwHGBwdHf4xMDT8QzcEWSNUk44sA8OVvwwMDM9giv//D2VmZFwNEoMDuMb9DQwsjg0Mf/qzmWMVpC0tAyoTarYtW5LnHf37PgPD0YUgHf8ZGBgZoS6Ca1y1KpQ5LGz131WZDMbmiQmnOXlZGK9fvbH96UfuuW4WTBFndj5K9yi6+u7/fwZGRkaG/0g2OrA4Nhz4s67S1N7K8esBQSYGhgu77s3RiTc3/cLEo71v20OlyOIrj///b2BiZGz4B9f4/z8DEyMjw7/OTj2ZeCvuKyL8jPwP3jPfeXfpwrtDFz6HlcxleAhTA3I2wsb9DiyOjgf+HFtmEGBiLbv+PzMTw/enrxhmNR2fWbaVIQNZE1aNeycqJErJcFfycDNc+/rmg75GzFNzBgaGVw0NDEwNDQzwaMGSAER5GBhe/2RgYPhtbSwld/Tss0fYEgLOBAALBOQowBqP8MiGxBU42tCdh1cjsWkeAIUZlA82LlHPAAAAAElFTkSuQmCC';

  const placeholder = () => {
    return <img src={bigImage?.placeholderBase64} className="bigImage " alt="" style={{ filter: 'blur(18px)' }} />;
  };


  return (
    <Paper elevation={3} className={'bigImage'} style={{ overflow: 'hidden' }}>
      <ImageContainer url={bigImage?.imageHQ || biImageDefaultValue} cn={'bigImage deBlur'} fallback={placeholder} />
    </Paper>
  );
};

export default BigImage;
