import React from 'react';
import { useImage } from 'react-image'
import ErrorBoundary from '@ErrorBoundary';

const ImageContainer = (props) => {
  const ImageWrapper = (props) => {
    const { url, cn } = props.props
    const { src } = useImage({
      srcList: url,
    })

    return (
      <React.Fragment>
        <img loading="lazy" src={src} alt={cn !== undefined ? cn : ''} className={cn !== undefined ? cn : ''} />
      </React.Fragment>
    )
  }

  return (
    <ErrorBoundary >
      <ImageWrapper props={props} />
    </ErrorBoundary>
  )
}

export default ImageContainer;
