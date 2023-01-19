import styled from '@emotion/styled';

export const StyledFriend = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 5px;
  padding: 3px 8px;
  background-color: white;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.25);
  & .status {
    height: 7px;
    width: 7px;
    border-radius: 5px;
    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  }
  & img {
    width: 48px;
    height: 48px;
    border-radius: 5px;
    background-color: lightblue;
  }
  & .name {
    font-size: 18px;
    font-weight: 600;
  }
`;