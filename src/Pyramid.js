import React, { Component } from "react";
import Styled from "styled-components";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";

import MetricCards from "./MetricCards";
import Keyboard, { KeyboardButton } from "./Keyboard";
import PageTitle from "./PageTitle";
import ChartTheme from "./ChartTheme";
import { Colors } from "./config";

import "reset-css";

class Pyramid extends Component {
  constructor() {
    super();

    this.state = {
      grades: Array(16)
        .fill()
        .map((item, i) => ({ label: `V${i}`, value: i })),
      ticks: []
    };
  }

  getAverage = () => {
    return !this.state.ticks.length
      ? 0
      : this.roundToFirstDecimal(this.getPoints() / this.state.ticks.length);
  };

  getPoints = () => {
    return !this.state.ticks.length
      ? 0
      : this.state.ticks.reduce((a, b) => a + b);
  };

  roundToFirstDecimal = num => Math.round(num * 10) / 10;

  handleAdd = e => {
    let ticks = this.state.ticks;
    ticks.push(parseInt(e.target.getAttribute("data-value")));
    this.setState({ ticks: ticks });
  };

  getXAxisLabels = () => this.state.grades.map(grade => grade.label);

  getXAxisValues = () => this.state.grades.map(grade => grade.value);

  getChartData = () => {
    // Initalize array of objects
    let data = this.state.grades.map(grade => ({
      grade: grade.value,
      count: 0
    }));

    // For each tick, increment the corresponding object in data
    this.state.ticks.forEach(tick => {
      data.forEach(grade => {
        if (grade.grade === tick) {
          grade.count++;
        }
      });
    });

    return data;
  };

  render(props) {
    return (
      <Wrapper>
        <Stats>
          <PageTitle>Pyramids</PageTitle>
          <MetricCards
            metrics={[
              { title: "Total", value: this.state.ticks.length },
              { title: "Average", value: this.getAverage() },
              { title: "Points", value: this.getPoints() }
            ]}
          />

          <VictoryChart theme={ChartTheme} domainPadding={10}>
            <VictoryAxis
              tickValues={this.getXAxisValues()}
              tickFormat={this.getXAxisLabels()}
            />
            <VictoryAxis
              dependentAxis
              domain={[0, 5]}
              tickFormat={x => x}
              offsetX={30}
            />
            <VictoryBar
              animate={{
                duration: 200,
                onLoad: { duration: 200 }
              }}
              data={this.getChartData()}
              x="grade"
              y="count"
              barRatio={1.05}
            />
          </VictoryChart>
        </Stats>

        <Keyboard buttons={this.state.grades} clickHandler={this.handleAdd} />
      </Wrapper>
    );
  }
}

const Wrapper = Styled.main`
  font-size: 16px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  overflow: auto;
  background-color: ${Colors.accent2};
`;

const Stats = Styled.div`
  width: 100%;
  padding-top: 20px; 
  display: block;
`;

export default Pyramid;
