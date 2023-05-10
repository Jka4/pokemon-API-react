import styled from 'styled-components/macro';

type UseInfiniteScrollContainerProps = Readonly<{
  $visible: boolean;
}>;

const UseInfiniteScrollContainer = styled.div<UseInfiniteScrollContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  opacity: ${({ $visible }): number => Number($visible)};
`;

export default UseInfiniteScrollContainer;
