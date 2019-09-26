import React from "react";
import styled from "styled-components";

import { useModalContext } from "./layout/modal";
import { getAssetsPrefix } from "../shared/utils";

import {
  Section as BaseSection,
  Container,
  Title as TitleBase
} from "./styled";

const Section = styled(BaseSection)`
  background-color: ${props => props.theme.colors.grey};
  text-align: center;
`;

const Title = styled(TitleBase)`
  margin-top: 0;
  font-size: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Continent = styled.a`
  display: block;
  cursor: pointer;

  &:hover {
    p {
      font-weight: bold;
    }

    div {
      filter: drop-shadow(0 5px 2px #555);
    }
  }
`;

const Img = styled.div`
  margin: 0 auto;
  background-image: url(${getAssetsPrefix()}/static/images/continents.png);
  background-repeat: no-repeat;
  background-size: auto;
  transition: all 0.3s;
`;

const EuropeImg = styled(Img)`
  width: 250px;
  height: 250px;
  background-position: 0px 0px;
`;

const AsiaImg = styled(Img)`
  width: 300px;
  height: 250px;
  margin-left: 20px;
  background-position: -260px 10px;
`;

const AustraliaImg = styled(Img)`
  width: 280px;
  height: 290px;
  background-position: -560px 10px;
`;

const VisaMap = () => {
  const [_, setModalState] = useModalContext();

  const handleClick = () => setModalState("FORM");

  return (
    <Section height="auto" id="continents">
      <Container>
        <Title>Куда поедем?</Title>
        <Wrapper>
          <Continent onClick={handleClick}>
            <p>Европа</p>
            <EuropeImg />
          </Continent>
          <Continent onClick={handleClick}>
            <p>Азия</p>
            <AsiaImg />
          </Continent>
          <Continent onClick={handleClick}>
            <p>Австралия</p>
            <AustraliaImg />
          </Continent>
        </Wrapper>
        <p>Выберите континент для более подробной информации</p>
      </Container>
    </Section>
  );
};

export default VisaMap;
