import React from "react";
import Styled from "styled-components";
import { Colors, Fonts } from "./config";

const MetricCard = props => (
  <Wrapper>
    <h2>{props.title}</h2>
    <p>{props.value}</p>
  </Wrapper>
);

const Wrapper = Styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;

  * {
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: ${Fonts.primary};
    color: ${Colors.primary};
    display: inline;
  }

  h2 {
    text-transform: uppercase;
    margin-right: 12px;
  }
`;

export default MetricCard;
