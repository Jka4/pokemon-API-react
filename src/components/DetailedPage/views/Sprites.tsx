import React from 'react';

import { spritesType } from 'types/index';
import styled from 'styled-components';

import { ImageContainer } from 'components/ImageContainer/ImageContainer';

interface Props {
  sprites: spritesType;
}

const Sprites: React.FC<Props> = ({ sprites }: Props) => {
  const base64: string =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAACGklEQVQ4T2NkYGBgbGhoYKxvqP/PyMD4nwEPaGBoYGJoYGBoaGj4z4isrsFhP0v9AYe/aAYwNjjsZ25wOPiPoaHhH0w9Y6Flg5C4mLx08C+bW6rbVX+CJP4z/GeEagYZDHfFTJHFkjd1Psuzfv50nbHEqkHsMdfPpWKcoqqq3PIrbj27N3PKodL7DaGr2BpWh/2K9mzgsxHU87rP9DXu+q83+nyvPi+SfPyvH+ZUQQbH9HflfGYMCj+5FDN3RD6AOWmm8UK5J8qsd9bK/mG99uZWEsPClvkgOcbQ0FXMq1eH/WXwySw1/S8UG/7JaBITI8/vl5eZzik4MoY+f/rg9kntv4t2Mrz7bfbwtc6pvX23HBwaWMA2hoaGMq9evfqvg2mBgTaHYJ6ZkUkw1///fPdvfdt8+vtlxstS7Ef//Xq/4ePny49f7tr1FWwjxEmg0IVERWVw30RXT9e8Tzc/MBw+dvFB79EcXQYGhi/oscQIC8E+n81uXOzcjS/ePdnOzMiZw88vLHrp9eEzQizCN8W45a69+P1hYs+uuK8wS8A2+on48RroBAQJcon8K9zmt9hR19dfkkvZ5vvn70f05K0/c//n8fn47fXF1kPpi2DRAwtVeHwhxSG661hCQ1f9Bwckwo8MDKtCVzFfey3K2HDA8Q8osLRfazM2HGj4uyp0FdP7e++Z0s+m/0Y2CSXJ4UunGIFDimJktQCji9qCchLcZQAAAABJRU5ErkJggg==';

  return (
    <>
      <Images>
        {Object.keys(sprites).map((spriteName: string) => (
          <div key={spriteName}>
            {sprites[spriteName] && (
              <Block>
                <ImageContainer url={sprites[spriteName]} fallback={<img src={base64} alt="" />} />
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

  div {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Sprites;
