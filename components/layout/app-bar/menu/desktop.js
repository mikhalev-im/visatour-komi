import React from "react";
import styled from "styled-components";

import { List, Item } from "./shared";

const ListDesktop = styled(List)`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const DesktopMenu = ({ items }) => {
  return (
    <ListDesktop>
      {items.map(item => (
        <Item key={item.title}>{item.title}</Item>
      ))}
    </ListDesktop>
  );
};

export default DesktopMenu;
