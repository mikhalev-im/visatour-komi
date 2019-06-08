import React from "react";
import styled from "styled-components";

import { Container as BaseContainer, Section as BaseSection } from "../styled";

const Section = styled(BaseSection)`
  background: #141e30;
  background: linear-gradient(to left, #243b55, #141e30);
`;

const Container = styled(BaseContainer)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Contacts = styled.div`
  flex-grow: 1;
  color: white;
  max-width: 320px;

  h3 {
    margin-top: 0;
  }
`;

const SocialBtns = styled.div`
  margin-bottom: 20px;

  margin-left: 20px;
  margin-right: 20px;

  a {
    display: block;
    background-size: cover;
    background-image: url(/static/images/logo.png);
    background-position: center;
    width: 74px;
    height: 100px;
  }
`;

const Map = styled.iframe`
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <Section height="auto">
      <Container>
        <SocialBtns>
          <a />
        </SocialBtns>
        <Contacts>
          <h3>Наши контакты:</h3>
          <p>Адрес: г. Сыктывкар, ул. Орджоникидзе 16</p>
          <p>Режим работы: с 10:00 до 18:00</p>
          <p>Телефон: +79041020492</p>
          <p>Электронная почта: c1one@yandex.ru</p>
        </Contacts>
        <Map
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acbf9d71c7e0c8772032d5f972f82b9e7da2021226e580d9635e5589b58b677ab&amp;source=constructor"
          width="320"
          height="300"
          frameBorder="0"
        />
      </Container>
    </Section>
  );
};

export default Footer;
