import React from "react";
import styled from "styled-components";

export const Section = styled.div`
  height: ${props => props.height || "500px"};
  padding: 50px 15px;
`;

export const Container = styled.div`
  max-width: 888px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 500px;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.size || 50}px;
  text-align: ${props => props.align || "center"};
`;

export const PulseBtn = styled.button`
  padding: 30px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.orange};
  font-size: 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  animation: pulse 2s infinite;
  width: 285px;

  transition-duration: 0.3s;
  transition-property: box-shadow;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.colors.darkOrange};
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 152, 24, 0.4);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(255, 152, 24, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 152, 24, 0);
    }
  }
`;

export const TourTransContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 20px 0;

  .ttv-hottours {
    margin-bottom: 50px;
  }
`;
