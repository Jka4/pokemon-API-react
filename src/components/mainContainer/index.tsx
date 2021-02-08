import React from 'react';

import Buttons from 'components/Buttons';
import Logo from 'components/MainContainer/views/Logo';
import ItemsList from 'components/MainContainer/views/ItemsList';

import './styles/style.scss';

const MainContainer: React.FC = () => {
  return (
    <section className="main">
      <Logo />
      <Buttons />
      <ItemsList />
    </section>
  );
};

export default MainContainer;
