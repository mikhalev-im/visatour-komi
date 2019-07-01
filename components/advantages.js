import React from "react";
import styled from "styled-components";
import { MdAccessTime, MdFavoriteBorder, MdCardGiftcard } from "react-icons/md";

import { Section, Container, Title as BaseTitle } from "./styled";

const Title = styled(BaseTitle)`
  margin-top: 0;
  font-size: 40px;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 40px 0;

  li {
    width: 200px;
    text-align: center;
  }

  svg {
    display: block;
    width: 75px;
    height: 75px;
    margin: 0 auto;
    color: ${props => props.theme.colors.orange};
  }
`;

const Text = styled.p`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const Advantages = () => {
  return (
    <Section height="auto" id="advantages">
      <Container>
        <Title>Ищете надежный визовый центр в Сыктывкаре?</Title>
        <SubTitle>Обращайтесь – мы всегда готовы оказать помощь!</SubTitle>
        <List>
          <li>
            <MdAccessTime />
            Быстрое оформление виз
          </li>
          <li>
            <MdFavoriteBorder />
            Безупречный сервис
          </li>
          <li>
            <MdCardGiftcard />
            Приятные цены
          </li>
        </List>
        <Text>
          Чтобы получить детальную информацию, свяжитесь с нами по телефону – мы
          рады ответить на любые ваши вопросы!
        </Text>
      </Container>
    </Section>
  );
};

export default Advantages;
