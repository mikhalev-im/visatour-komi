import React, { useRef } from "react";
import styled from "styled-components";

import { getAssetsPrefix } from "../shared/utils";
import { useModalContext } from "./layout/modal";

import { sendMail } from "../shared/api";

import {
  PulseBtn,
  Container as BaseContainer,
  Title as BaseTitle
} from "../components/styled";

const Wrapper = styled.div`
  height: 650px;
  padding-top: 150px;
  background: url(${getAssetsPrefix()}/static/images/cover.png) 80% 50px /
      contain no-repeat,
    linear-gradient(to right, #64acb7, #68c6e0);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    background: url(${getAssetsPrefix()}/static/images/cover.png) 150% 50px /
        contain no-repeat,
      linear-gradient(to right, #64acb7, #68c6e0);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    background: linear-gradient(to right, #64acb7, #68c6e0);
    height: auto;
    padding: 50px 0;
  }
`;

const Container = styled(BaseContainer)`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 25px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    text-align: center;
  }
`;

const Title = styled(BaseTitle)`
  color: ${props => props.theme.colors.white};

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    text-align: left;
  }
`.withComponent("h1");

const Input = styled.input`
  padding: 25px 10px;
  border-radius: 40px;
  border: 1px solid ${props => props.theme.colors.orange};
  outline: none;
  text-align: center;
  font-size: 20px;
  width: 285px;
`;

const Cover = () => {
  const [_, setModalState] = useModalContext();
  const ref = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    if (!ref.current.value) {
      ref.current.focus();
      return;
    }

    sendMail(ref.current.value);
    setModalState("THANKS");
  };

  return (
    <Wrapper>
      <Container>
        <Title size="30">Визы и туры в любую страну!</Title>
        <form autoComplete="on">
          <p>
            <Input
              ref={ref}
              type="tel"
              name="tel"
              required
              autoComplete="tel"
              placeholder="Номер телефона"
            />
          </p>
          <p>
            <PulseBtn onClick={handleSubmit}>Получить консультацию</PulseBtn>
          </p>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Cover;
