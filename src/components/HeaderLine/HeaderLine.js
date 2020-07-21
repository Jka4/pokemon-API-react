import React from 'react';
import SearchInput from "../SearchInput/SearchInput";
import Player from "../Player/Player";
import './style.scss';

const HeaderLine = () => {
  return (
    <div className='topLine'>
      <Player />
      <SearchInput />
    </div>
  );
}

export default HeaderLine;
