import React from "react";
import styled from "styled-components";

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
  transition: all 0.3s;
  background-size: cover;
`;

const EuropeImg = styled(Img)`
  width: 250px;
  height: 250px;
  background-image: url(${getAssetsPrefix()}/static/images/europe-ready.png);
`;

const AsiaImg = styled(Img)`
  width: 300px;
  height: 250px;
  background-image: url(${getAssetsPrefix()}/static/images/asia-ready.png);
  margin-left: 20px;
`;

const AustraliaImg = styled(Img)`
  width: 280px;
  height: 290px;
  background-image: url(${getAssetsPrefix()}/static/images/australia-ready.png);
`;

const VisaMap = () => {
  return (
    <Section height="auto">
      <Container>
        <Title>Куда поедем?</Title>
        <Wrapper>
          <Continent>
            <p>Европа</p>
            <EuropeImg />
          </Continent>
          <Continent>
            <p>Азия</p>
            <AsiaImg />
          </Continent>
          <Continent>
            <p>Австралия</p>
            <AustraliaImg />
          </Continent>
        </Wrapper>
        <p>Выберите континет для более подробной инфомрации</p>
      </Container>
    </Section>
  );
};

export default VisaMap;
