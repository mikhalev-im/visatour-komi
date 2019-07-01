import React from "react";
import styled from "styled-components";

import { getAssetsPrefix } from "../shared/utils";
import { Section, Container, Title as TitleBase } from "./styled";

const items = [
  {
    img: `${getAssetsPrefix()}/static/images/passport.jpg`,
    caption: "Оформление виз"
  },
  {
    img: `${getAssetsPrefix()}/static/images/bus-tour.jpg`,
    caption: "Оформление туров"
  },
  {
    img: `${getAssetsPrefix()}/static/images/aircraft.jpg`,
    caption: "Авиабилеты"
  },
  {
    img: `${getAssetsPrefix()}/static/images/hotel.jpg`,
    caption: "Бронирование отелей"
  },
  {
    img: `${getAssetsPrefix()}/static/images/insurance.jpg`,
    caption: "Страхование путешествинников"
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
  background-size: cover;
  background-image: url(${props => props.img});
`;

const Services = () => {
  return (
    <Section height="auto" id="services">
      <Container>
        <Title>Наши услуги</Title>
        <List>
          {items.map(item => (
            <Item key={item.caption}>
              <Img img={item.img} />
              <p>{item.caption}</p>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Services;
