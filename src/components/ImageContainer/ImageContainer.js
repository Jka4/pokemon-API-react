import React from 'react';
import { useImage } from 'react-image'
import ErrorBoundary from '../utils/ErrorBoundary';

const ImageContainer = (props) => {
  const ImageWrapper = (props) => {
    const { url, cn } = props.props
    const { src } = useImage({
      srcList: url,
    })

    return (
      <React.Fragment>
        <img src={src} alt='pokemon' className={cn !== undefined ? cn : ''} />
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
