import styled from '@emotion/styled';

export const StyledTransactions = styled.table`
  width: 400px;
  margin: 0 auto;
  border-collapse: collapse;
  color: #929296;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin-bottom: 10px;
  & td,
  & th {
    text-align: center;
    padding: 8px;
    font-size: 10px;
    border-left: 0.5px solid #e4e4e4;
    &:first-of-type {
      border-left: none;
    }
  }
  & > thead th {
    font-weight: 500;
    text-transform: uppercase;
    color: white;
    background-color: #00bcd5;
  }
  & > tbody tr:nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;