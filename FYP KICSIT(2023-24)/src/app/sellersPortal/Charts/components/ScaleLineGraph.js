import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend } from 'victory';

function SalesLineChart({ data }) {
  return (
<div>
<VictoryChart
      domainPadding={20}
      width={600}
      height={400}
    >
      <VictoryLegend x={50} y={20}
        orientation="horizontal"
        data={[
          { name: 'Product A', symbol: { fill: 'blue' } },
          { name: 'Product B', symbol: { fill: 'green' } },
        ]}
      />
      <VictoryAxis
        tickValues={data[0].sales.map(item => item.month)}
        tickFormat={data[0].sales.map(item => item.monthLabel)}
      />
      <VictoryAxis dependentAxis />
      {data.map(product => (
        <VictoryLine
          key={product.name}
          data={product.sales}
          x="month"
          y="amount"
          label={product.name}
          style={{ data: { stroke: product.color } }}
        />
      ))}
    </VictoryChart>
</div>
  );
}

export default SalesLineChart;
