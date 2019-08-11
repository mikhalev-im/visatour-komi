import React from "react";
import styled from "styled-components";

import { getAssetsPrefix } from "../../shared/utils";
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
  }
`;

const Map = styled.iframe`
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const ContactLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Section height="auto" id="footer">
      <Container itemScope itemType="https://schema.org/TravelAgency">
        <SocialBtns>
          <a href="/">
            <img
              src={`${getAssetsPrefix()}/static/images/logo.png`}
              itemProp="image"
              alt="Визовый туристический центр"
            />
          </a>
        </SocialBtns>
        <Contacts>
          <h3>Наши контакты:</h3>
          <p itemProp="name">Визовый туристический центр</p>
          <p
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            Адрес: г. <span itemProp="addressLocality">Сыктывкар</span>,{" "}
            <span itemProp="streetAddress">ул. Орджоникидзе 16</span>
          </p>
          <p>
            Режим работы:
            <br />
            Пн - Пт: 10:00 - 18:00
            <br />
            Сб: 11:00 - 15:00
          </p>
          <p>
            Телефон:{" "}
            <ContactLink href="tel:+78212239305">
              <span itemProp="telephone">+7 (8212) 23-93-05</span>
            </ContactLink>
          </p>
          <p>
            Электронная почта:{" "}
            <ContactLink href="mailto:info@visatour-komi.ru">
              <span itemProp="email">info@visatour-komi.ru</span>
            </ContactLink>
          </p>
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
