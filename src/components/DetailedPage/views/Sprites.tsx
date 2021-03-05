import React from 'react';

import { spritesType } from 'types/index';
import styled from 'styled-components';

interface Props {
  sprites: spritesType;
}

const Sprites: React.FC<Props> = ({ sprites }: Props) => {
  return (
    <>
      <Images>
        {Object.keys(sprites).map((spriteName: string) => (
          <div key={spriteName}>
            {sprites[spriteName] && (
              <Block>
                <img src={sprites[spriteName]} alt={spriteName} />
              </Block>
            )}
          </div>
        ))}
      </Images>
    </>
  );
};

const Images = styled.div`
  margin-bottom: 100px;
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Block = styled.div`
  min-width: 70px;
  margin: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 5px;
  background: #6cff79;
  box-shadow: 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

export default Sprites;
