import React from "react";
import { MainStyles } from "../styles/MainStyles";

const MainContent = (props) => {
  return (
    <MainStyles>
      <div>{props.children}</div>;
    </MainStyles>
  );
};
export default MainContent;
