import React from "react";
import styled from "styled-components";

import { useModalContext } from "./layout/modal";
import Wave from "./wave";
import { PulseBtn } from "./styled";

const Section = styled.div`
  height: 500px;
  display: flex;
  justify-content: flex-end;
  background: linear-gradient(to left, #8f94fb, #93cede);

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    text-align: center;
    color: white;
    height: auto;
  }
`;

const TextSection = styled.div`
  width: 45%;
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  position: relative;
  z-index: 5;
  padding: 50px 0;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    background: linear-gradient(to left, #8f94fb, #93cede);
  }
`;

const WaveStyled = styled(Wave)`
  position: absolute;
  right: 95%;
  top: 0;
  width: 230px;
  z-index: 5;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 10;

  ul {
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  max-width: 400px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 auto;
  }
`;

const FingerPrintImg = styled.img`
  display: block;
  position: absolute;
  right: 125%;
  top: 75px;
`;

const Biometrics = () => {
  const [_, setModalState] = useModalContext();

  return (
    <Section>
      <TextSection>
        <FingerPrintImg src="/static/images/fingerprint-1.png" />
        <WaveStyled />
        <TextWrapper>
          <Title>Мобильная биометрия в Сыктывкаре</Title>
          <ul>
            <li>Финляндия: 26 мая</li>
            <li>Испания: 26 мая</li>
          </ul>
          <PulseBtn onClick={() => setModalState("FORM")}>
            Оставить заявку
          </PulseBtn>
        </TextWrapper>
      </TextSection>
    </Section>
  );
};

export default Biometrics;
