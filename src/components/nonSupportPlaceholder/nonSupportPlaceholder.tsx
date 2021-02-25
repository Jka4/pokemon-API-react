import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import styled from 'styled-components/macro';

const NonSupportPlaceholder: React.FC = () => {
  return (
    <>
      <NonSupport>
        <ErrorOutlineIcon style={{ fontSize: 60 }} />
        <span>Sorry,</span>
        <span>your device</span>
        <span>is not supported</span>
      </NonSupport>
    </>
  );
};

const NonSupport = styled.div`
  background: yellow;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: red;

  svg {
    margin-bottom: 20px;
  }

  span {
    font-size: 1em;
  }
`;

export default NonSupportPlaceholder;
