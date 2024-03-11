import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

function LineChart({ data }) {
  return (
    <>
        <div>
        <VictoryChart
      domainPadding={20}
      width={400}
      height={300}
    >
      <VictoryAxis
        tickValues={data.map(item => item.x)}
        tickFormat={data.map(item => item.xLabel)}
      />
      <VictoryAxis dependentAxis />
      <VictoryLine
        data={data}
        x="x"
        y="y"
      />
    </VictoryChart>
        </div>
    </>
  );
}

export default LineChart;
