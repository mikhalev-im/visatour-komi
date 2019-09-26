import React from "react";
import styled from "styled-components";

import { getAssetsPrefix } from "../shared/utils";
import { Section, Container, Title as TitleBase } from "./styled";

const items = [
  {
    caption: "Оформление виз",
    bgPosition: "0 0"
  },
  {
    caption: "Оформление туров",
    bgPosition: "-155px 0"
  },
  {
    caption: "Авиабилеты",
    bgPosition: "-305px 0"
  },
  {
    caption: "Бронирование отелей",
    bgPosition: "-455px 0"
  },
  {
    caption: "Страхование путешественников",
    bgPosition: "-605px 0"
  }
];

const Title = styled(TitleBase)`
  margin-top: 0;
  margin-bottom: 60px;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  max-width: 150px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Img = styled.div`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: ${props => props.bgPosition};
  background-image: url(${getAssetsPrefix()}/static/images/services.png);
`;

const Services = () => {
  return (
    <Section height="auto" id="services">
      <Container>
        <Title>Наши услуги</Title>
        <List>
          {items.map(item => (
            <Item key={item.caption}>
              <Img bgPosition={item.bgPosition} />
              <p>{item.caption}</p>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Services;
