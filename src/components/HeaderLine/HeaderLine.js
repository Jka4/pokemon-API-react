import React from 'react';
import SearchInput from "@SearchInput";
import Player from "@Player";

import './styles/style.scss';

const HeaderLine = () => {
  return (
    <div className='topLine'>
      <Player />
      <SearchInput />
    </div>
  );
}

export default HeaderLine;
