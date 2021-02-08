/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import GetButton from './views/GetButton';
import ClearButton from './views/ClearButton';
import AllPokesPageButton from './views/AllPokesPageButton';

import './styles/style.scss';

const Buttons: React.FC = () => {
  return (
    <div className="Button">
      <AllPokesPageButton />
      <ClearButton />
      <GetButton />
    </div>
  );
};

export default Buttons;
