import React from 'react';
import { useImage } from 'react-image'
import { ErrorBoundary } from 'react-error-boundary';

const PokemonImage = (props) => {

  const ErrorFallback = () => {
    return <span className='err' >Ooops...</span>
  }

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ImageWrapper props={props} />
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default PokemonImage;
