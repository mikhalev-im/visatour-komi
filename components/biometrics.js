import React from "react";
import styled from "styled-components";

import { useModalContext } from "./layout/modal";
import { getAssetsPrefix } from "../shared/utils";

import Wave from "./wave";
import { PulseBtn } from "./styled";

const dates = [
  {
    countries: [
      "Финляндия",
      "Австрия",
      "Чехия",
      "Литва",
      "Словения",
      "Дания",
      "Исландия"
    ],
    dates: ["28 января"]
  },
  {
    countries: ["Латвия", "Венгрия"],
    dates: ["в любой будний день!"]
  }
];

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
  margin-top: 10px;
  margin-bottom: 10px;

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

const List = styled.ul`
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0;
    list-style: none;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Biometrics = () => {
  const [_, setModalState] = useModalContext();

  return (
    <Section id="biometrics">
      <TextSection>
        <FingerPrintImg
          src={`${getAssetsPrefix()}/static/images/fingerprint.png`}
        />
        <WaveStyled />
        <TextWrapper>
          <Title>Мобильная биометрия в Сыктывкаре</Title>
          <List>
            {dates.map(item => (
              <ListItem key={item.countries.join()}>
                <b>{item.countries.join(", ")}:</b>
                <br />
                {item.dates.join(", ")}
              </ListItem>
            ))}
          </List>
          <PulseBtn onClick={() => setModalState("FORM")}>
            Оставить заявку
          </PulseBtn>
        </TextWrapper>
      </TextSection>
    </Section>
  );
};

export default Biometrics;
