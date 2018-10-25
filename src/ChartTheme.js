import { Colors } from "./config";

const ChartTheme = {
  dependentAxis: {
    style: {
      axis: {
        stroke: "transparent"
      },
      grid: {
        stroke: "rgba(0, 0, 0, 0.1)"
      },
      tickLabels: {
        fill: Colors.primary,
        fontFamily: "futura",
        fontSize: 8,
        padding: 4
      }
    }
  },
  independentAxis: {
    style: {
      axis: {
        stroke: Colors.primary
      },
      grid: {
        stroke: "transparent"
      },
      tickLabels: {
        fill: Colors.primary,
        fontFamily: "futura",
        fontSize: 8
      }
    }
  },
  bar: {
    style: {
      data: {
        fill: Colors.primary
      }
    }
  }
};

export default ChartTheme;
