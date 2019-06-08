import React from "react";
import styled from "styled-components";
import { Section, Container, Title as TitleBase } from "./styled";

const items = [
  { img: "/static/images/passport.jpg", caption: "Оформление виз" },
  { img: "/static/images/bus-tour.jpg", caption: "Оформление туров" },
  { img: "/static/images/aircraft.jpg", caption: "Авиабилеты" },
  { img: "/static/images/hotel.jpg", caption: "Бронирование отелей" },
  {
    img: "/static/images/insurance.jpg",
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
    <Section height="auto">
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
