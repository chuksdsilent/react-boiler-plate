import styled from "styled-components";

export const SidebarStyles = styled.div`
  background-color: ${(props) => `${props.theme.colors.secondary}`};
  height: 100vh;
  padding-top: 2rem;
  ul {
    padding: 0px;
    li {
      list-style-type: none;
      padding: 1rem 2rem;
      cursor: pointer;
      &:hover {
        transition: 0.5s all ease-out;
        background-color: palevioletred;
      }
      a {
        color: white;
        font-size: 18px;
      }
    }
  }
  /* &:hover {
    transition: 0.5s all ease-out;
    background-color: palevioletred;
  } */
`;
