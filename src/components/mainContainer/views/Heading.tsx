import React from 'react';
import styled from 'styled-components';

const Heading: React.FC = () => {
  return (
    <Titles>
      <List>
        <Element>photo</Element>
        <Element>name</Element>
        <Element>order</Element>
        <Element>exp</Element>
      </List>
    </Titles>
  );
};

const Titles = styled.h2`
  width: 100%;
  max-width: 900px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0;
  padding-left: 0;
`;

const Element = styled.li`
  cursor: pointer;
  text-align: center;
  margin: 0;
  padding: 0;
  width: auto;
  list-style: none;
  text-transform: uppercase;
`;

export default Heading;
