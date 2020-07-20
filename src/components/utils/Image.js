
import React from 'react';
import { useImage } from 'react-image'


const PokemonImage = (props) => {
  const { src } = useImage({
    srcList: props.url,
  })

  return <img src={src} alt='pokemon' />
}

export default PokemonImage;