import React from "react";
import styled from "styled-components";

import MobileMenu from "./mobile";
import DesktopMenu from "./desktop";

const Wrapper = styled.nav`
  background-color: ${props => props.theme.colors.orange};
  width: 1000%;
  color: ${props => props.theme.colors.white};
`;

const menu = [
  { title: "Визы", link: "#continents" },
  { title: "Автобусные туры", link: "#continents" },
  { title: "Авиабилеты", link: "#continents" },
  { title: "Контакты", link: "#footer" }
];

const Menu = () => {
  return (
    <Wrapper>
      <DesktopMenu items={menu} />
      <MobileMenu items={menu} />
    </Wrapper>
  );
};

export default Menu;
