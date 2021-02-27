import React from 'react';
import styled from 'styled-components';

export default class ErrorBoundary extends React.PureComponent {
  state = { error: null };

  componentDidCatch(error: {}, errorInfo: any) {
    this.setState({ error });
    errorInfo.ErrorType = 'ReactError';
  }

  render() {
    if (this.state.error) {
      return (
        <Error>
          <Title>Ooops...</Title>
        </Error>
      );
    }

    return this.props.children;
  }
}

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 14px;
  color: #ff3527;
`;
