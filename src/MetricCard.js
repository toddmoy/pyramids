import React from "react";
import Styled from "styled-components";
import { Colors, Fonts } from "./config";

const MetricCard = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Value>{props.value}</Value>
  </Wrapper>
);

const Wrapper = Styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
`;

const Title = Styled.h2`
  font-family: ${Fonts.primary};
  color: ${Colors.primary};
  text-transform: uppercase;
  margin-right: 12px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Value = Styled.p`
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: ${Fonts.primary};
  color: ${Colors.primary};
  display: inline;
`;

export default MetricCard;
