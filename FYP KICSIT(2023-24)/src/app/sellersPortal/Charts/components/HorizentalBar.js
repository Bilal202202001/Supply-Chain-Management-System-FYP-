import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

function HorizontalBarChart({ data }) {
  return (
    <>
        <div className='p-4'>
        <VictoryChart
      domainPadding={10}
      width={500}
      height={300}
      horizontal
    >
      <VictoryAxis
        tickValues={data.map(item => item.y)}
        tickFormat={data.map(item => item.yLabel)}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar
        data={data}
        x="frequency"
        y="y"
      />
    </VictoryChart>
        </div>
    </>
  );
}

export default HorizontalBarChart;
