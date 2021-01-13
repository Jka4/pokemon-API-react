import React from 'react';

import GetButton from 'components/GetButton/GetButton';
import Logo from './Logo';
import ItemsList from './itemsList';

import './styles/style.scss';

const MainContainer: React.FC = () => {
  return (
    <section className="main">
      <Logo />
      <GetButton />
      <ItemsList />
    </section>
  );
};

export default MainContainer;
