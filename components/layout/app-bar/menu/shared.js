import React from "react";
import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  line-height: 48px;
  text-transform: uppercase;
  padding: 0 40px;
  text-align: center;

  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;
