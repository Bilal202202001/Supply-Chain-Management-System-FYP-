import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

function FrequencyGraph({ data }) {
  return (
    <>
        <div>
        <VictoryChart
      domainPadding={40}
      width={400}
      height={300}
    >
      <VictoryAxis
        tickValues={data.map(item => item.x)}
        tickFormat={data.map(item => item.xLabel)}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar
        data={data}
        x="x"
        y="frequency"
      />
    </VictoryChart>
        </div>
    </>
  );
}

export default FrequencyGraph;
