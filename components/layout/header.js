import React from "react";
import styled from "styled-components";
import Link from "next/link";

import AppBar from "./app-bar";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.header`
  display: flex;
  width: 1230px;
  padding: 0 30px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 940px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 724px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 480px;
  }
`;

const Logo = styled.a`
  display: block;
  background-size: cover;
  background-image: url(/static/images/logo.jpg);
  background-position: center;
  width: 96px;
  height: 96px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <Logo />
        </Link>
        <AppBar />
      </Container>
    </Wrapper>
  );
};

export default Header;
