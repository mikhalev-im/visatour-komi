import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import { Item, List } from "./shared";
import { useComponentVisible } from "./effects";

const ListMobile = styled(List)`
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 564px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 250px;
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 185px;
  }
`;

const MenuBtn = styled.li`
  line-height: 48px;
  font-size: 20px;
`;

const HiddenMenu = styled.div`
  position: fixed;
  width: 200px;
  top: 0;
  right: 0;
  height: 100%;
  transition: 0.5s;
  padding-top: 10px;
  background-color: ${props => props.theme.colors.orange};
  box-shadow: -5px 0 5px rgba(69, 90, 100, 0.5);
`;

const HiddenItem = styled.div`
  padding-left: 10px;
`;

const MobileMenu = ({ items }) => {
  const { ref, isVisible, setIsVisible } = useComponentVisible(false);

  const [first, ...rest] = items;

  return (
    <ListMobile>
      <Item>{first.title}</Item>
      <MenuBtn ref={ref}>
        <FaBars onClick={() => setIsVisible(value => !value)} />
        <HiddenMenu style={{ width: isVisible ? "200px" : "0" }}>
          {rest.map(item => (
            <HiddenItem key={item.title}>{item.title}</HiddenItem>
          ))}
        </HiddenMenu>
      </MenuBtn>
    </ListMobile>
  );
};

export default MobileMenu;
