import React from "react";
import styled from "styled-components";

import { getAssetsPrefix } from "../shared/utils";
import { Section as BaseSection, Title as BaseTitle } from "./styled";

const Section = styled(BaseSection)`
  background-image: url(${getAssetsPrefix()}/static/images/switz.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${props => props.theme.colors.white};
`;

const Overlay = styled.div`
  background-color: ${props => props.theme.colors.black};
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Title = styled(BaseTitle)`
  position: absolute;
  z-index: 5;
  top: 150px;

  left: 50%;
  transform: translateX(-50%);
`;

const Tours = () => {
  return (
    <Section id="tours">
      <Title>Автобусные и авиатуры</Title>
      <Overlay />
    </Section>
  );
};

export default Tours;
