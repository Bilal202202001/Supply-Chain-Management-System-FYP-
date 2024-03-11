import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

function BarChart({ data }) {
  return (
    <>
      <div className='text-base'>
        <VictoryChart
          domainPadding={40}
          width={300}
          height={300}
          title='CHART'
        >
          <VictoryAxis
            tickValues={data.map(item => item.x)}
            tickFormat={data.map(item => item.xLabel)}
          />
          <VictoryAxis dependentAxis />
          <VictoryBar
            data={data}
            x="x"
            y="y"
          />
        </VictoryChart>

      </div>
    </>);
}

export default BarChart;
