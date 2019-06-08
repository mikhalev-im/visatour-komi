import React from "react";
import styled from "styled-components";

import Menu from "./menu";
import InfoBar from "./info-bar";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const AppBar = () => {
  return (
    <Wrapper>
      <InfoBar />
      <Menu />
    </Wrapper>
  );
};

export default AppBar;
