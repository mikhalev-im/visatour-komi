import React from "react";
import styled from "styled-components";

import { useModalContext } from "../modal";
import { FaPhoneVolume, FaPhoneSquare } from "react-icons/fa/";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Address = styled.div`
  font-size: 15px;

  & p {
    margin: 0;
    line-height: 24px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;

    & p {
      margin-left: 30px;
      line-height: 48px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const WorkingHours = styled.p`
  color: #1e8edd;
`;

const Contacts = styled.div`
  font-size: 25px;
  height: 48px;

  & a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    line-height: 48px;
  }

  & svg {
    font-size: 28px;
    vertical-align: text-bottom;
    color: ${props => props.theme.colors.blue};
  }

  & b {
    color: ${props => props.theme.colors.blue};
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    font-size: 18px;

    & svg {
      font-size: 20px;
    }
  }
`;

const Callback = styled.div`
  height: 48px;
  font-size: 17px;
  color: ${props => props.theme.colors.blue};
  cursor: pointer;

  & a {
    line-height: 48px;
  }

  & svg {
    font-size: 22px;
    vertical-align: text-bottom;
  }

  & span {
    border-bottom: 1px solid;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const InfoBar = () => {
  const [_, setModalState] = useModalContext();

  return (
    <Wrapper>
      <Address>
        <p>г. Сыктывкар, ул. Орджоникидзе 16</p>
        <WorkingHours>По будням с 10:00 до 18:00</WorkingHours>
      </Address>
      <Contacts>
        <a href="tel:+79041020492">
          <FaPhoneVolume /> +7 (904) <b>102-04-92</b>
        </a>
      </Contacts>
      <Callback onClick={() => setModalState("FORM")}>
        <a>
          <FaPhoneSquare /> <span>Заказать звонок</span>
        </a>
      </Callback>
    </Wrapper>
  );
};

export default InfoBar;
