import React from 'react';
import { VictoryPie } from 'victory';

function PieChart({ data }) {
  return (
    <div className=''>
        <VictoryPie
      data={data}
      colorScale={['#3490dc', '#e3342f', '#38c172', '#ffed4a', '#6b7280']} // Customize color scale
    />
    </div>
  );
}

export default PieChart;
