import React from 'react';

import styled from 'styled-components/macro';

const ErrorPage: React.FC = () => {
  return (
    <ErrorPageStyled>
      <Image src={`${process.env.PUBLIC_URL}/images/404.png`} alt="404_pikachu" />
      <ErrCode>404</ErrCode>
      <ErrStr>Page Not Found</ErrStr>
    </ErrorPageStyled>
  );
};

const ErrorPageStyled = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ErrCode = styled.div`
  font-size: 52px;
`;

const ErrStr = styled.div`
  font-size: 24px;
`;

const Image = styled.img`
  filter: drop-shadow(13px 17px 45px #222);
`;

export default ErrorPage;
