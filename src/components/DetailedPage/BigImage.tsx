import React, { lazy } from 'react';
import Paper from '@material-ui/core/Paper';

import { Pokes } from 'types';

const ImageContainer = lazy(() => import('components/ImageContainer/ImageContainer'));

interface RootType {
  bigImage?: Pokes;
}

const BigImage: React.FC<RootType> = ({ bigImage }: RootType) => {
  const placeholder = () => {
    return <img src={bigImage?.placeholderBase64} className="bigImage " alt="" style={{ filter: 'blur(18px)' }} />;
  };

  return (
    <Paper elevation={3} style={{ overflow: 'hidden' }}>
      <ImageContainer url={bigImage?.imageHQ || ''} cn={'bigImage'} fallback={placeholder} />
    </Paper>
  );
};

export default BigImage;
