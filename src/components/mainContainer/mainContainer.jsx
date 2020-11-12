import React from "react";

import GetButton from "@GetButton";
import Logo from "@Logo";
import ItemsList from "./itemsList";

import "./styles/style.scss";

const MainContainer = () => {
  return (
    <section className="main">
      <Logo />
      <GetButton />
      <ItemsList />
    </section>
  );
};

export default MainContainer;
