import React, { Suspense } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { spritesType } from 'types/index';
import styled from 'styled-components';

interface Props {
  sprites?: spritesType;
}

const Sprites: React.FC<Props> = ({ sprites = {} }: Props) => {
  const SpritesPlaceholders = () => {
    return (
      <>
        {[1, 2, 3, 4].map((el) => (
          <Block key={el}>
            <SkeletonTheme color="#6cff79" highlightColor="yellow">
              <Skeleton circle={true} height={60} width={60} />
            </SkeletonTheme>
          </Block>
        ))}
      </>
    );
  };

  return (
    <>
      <Images>
        <Suspense fallback={SpritesPlaceholders()}>
          {Object.keys(sprites).map((spriteName: string) => (
            <div key={spriteName}>
              {sprites[spriteName] && (
                <Block>
                  <img src={sprites[spriteName]} alt={sprites[spriteName]} />
                </Block>
              )}
            </div>
          ))}
        </Suspense>
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
  margin-left: auto;
  margin-right: auto;
  margin: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 5px;
  background: #6cff79;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

export default Sprites;
