import styled from '@emotion/styled';

export const StyledProfile = styled.div`
  width: 350px;
  margin: 0 auto 10px;
  border-radius: 15px;
  background-color: white;
  & > .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0 0.6em;
  }
  & > .description img {
    height: 15em;
    width: 15em;
    padding: 0.2em;
    border-radius: 100%;
    margin-bottom: 0.5em;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.45);
    background-color: lightblue;
  }
  & > .description .name {
    font-weight: bold;
  }
  & > .description p {
    margin-bottom: 0.3em;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  /* padding: 0;
  margin-bottom: 0; */
  border-radius: 0 0 10px 10px;
  background-color: #cecece;
  & > li {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1em;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    overflow: hidden;
    align-items: center;
    &:first-of-type {
      border-left: none;
    }
  }
  & > li .label {
    font-weight: bold;
    margin-bottom: 0.3em;
  }
`;