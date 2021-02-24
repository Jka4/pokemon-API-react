import React from 'react';

import styled from 'styled-components/macro';

const ErrorPage: React.FC = () => {
  return (
    <ErrorPageStyled>
      <div className="errCode">404</div>
      <div className="image">
        <Image src={`${process.env.PUBLIC_URL}/images/404.png`} alt="404_pickachu" />
      </div>
      <div className="description">Page Not Found</div>
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

  .errCode {
    font-size: 42px;
  }

  .description {
    font-size: 24px;
  }
`;

const Image = styled.img`
  filter: drop-shadow(13px 17px 45px #222);
`;

export default ErrorPage;
