
import React from 'react';
import { useImage } from 'react-image'


const PokemonImage = (props) => {
  const { src } = useImage({
    srcList: props.url,
  })

  return <img src={src} alt='pokemon' className={props.cn !== undefined ? props.cn : ''} />
}

export default PokemonImage;