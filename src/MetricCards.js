import React from "react";
import Styled from "styled-components";
import MetricCard from "./MetricCard";

const MetricCards = props => (
  <Wrapper>
    {props.metrics.map((metric, i) => (
      <MetricCard title={metric.title} key={i} value={metric.value} />
    ))}
  </Wrapper>
);

const Wrapper = Styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 8px;
  margin-bottom: 1em;
`;

export default MetricCards;
