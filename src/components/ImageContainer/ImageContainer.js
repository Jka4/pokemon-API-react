import React from 'react';
import { useImage } from 'react-image'
import Boundary from '../utils/Boundary';

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
    <React.Fragment>
      <Boundary component={<ImageWrapper props={props} />} />
    </React.Fragment>
  )
}

export default ImageContainer;
