import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  a h1 {
    height: 100%;
    img {
      height: 100%;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
  }
`;
