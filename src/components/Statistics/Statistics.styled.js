import styled from '@emotion/styled';

export const StyledStatistics = styled.section`
  width: 350px;
  margin: 0 auto 10px;
  background-color: white;
`;

export const Title = styled.h2`
  padding: 20px;
  font-size: 20px;
  text-transform: uppercase;
  color: #9ea7ae;
  text-align: center;
`;

export const StyledList = styled.ul`
  display: flex;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-grow: 1;
  padding: 10px 15px;
  flex-direction: column;
  gap: 0.5em;
  color: white;
  background-color: ${props => props.color};
  align-items: center;
  & .label {
    font-size: 10px;
  }
  & .percentage {
    font-size: 17px;
  }
`;