import React from 'react';
import { VictoryChart, VictoryScatter, VictoryAxis } from 'victory';

function DotGraph({ data }) {
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
      <VictoryScatter
        data={data}
        x="x"
        y="y"
        size={5} // Customize the dot size
      />
    </VictoryChart>
        </div>
    </>
  );
}

export default DotGraph;
