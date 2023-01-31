import React from 'react';
import { VictoryBar, VictoryChart, VictoryLine, VictoryPolarAxis, VictoryTheme } from 'victory';

export default function Chart() {
  return (
    <div>
      <VictoryChart polar theme={VictoryTheme.material} startAngle={90} endAngle={450}>
        <VictoryPolarAxis
          tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}
          labelPlacement="vertical"
        />
        <VictoryBar
          style={{ data: { fill: 'tomato', width: 30 } }}
          data={[
            { x: 0, y: 2 },
            { x: 60, y: 3 },
            { x: 120, y: 5 },
            { x: 180, y: 4 },
            { x: 240, y: 4 },
            { x: 300, y: 4 },
          ]}
        />
      </VictoryChart>

      <VictoryChart polar theme={VictoryTheme.material} startAngle={0} endAngle={180}>
        <VictoryPolarAxis tickValues={[0, 45, 90, 135, 180]} labelPlacement="vertical" />
        <VictoryBar
          style={{ data: { fill: 'tomato', width: 30 } }}
          data={[
            { x: 0, y: 2 },
            { x: 45, y: 3 },
            { x: 90, y: 5 },
            { x: 135, y: 4 },
            { x: 180, y: 7 },
          ]}
        />
      </VictoryChart>
      <VictoryChart maxDomain={{ y: 4.5 }}>
        <VictoryLine
          data={[
            { x: 0, y: 2 },
            { x: 45, y: 3 },
            { x: 90, y: 5 },
            { x: 135, y: 4 },
            { x: 180, y: 7 },
          ]}
        />
      </VictoryChart>
      <VictoryChart polar theme={VictoryTheme.material}>
        <VictoryPolarAxis />
        <VictoryBar
          data={[
            { x: 0, y: 2 },
            { x: 45, y: 3 },
            { x: 90, y: 5 },
            { x: 135, y: 4 },
            { x: 180, y: 7 },
          ]}
          style={{ data: { fill: '#c43a31', stroke: 'black', strokeWidth: 2 } }}
        />
      </VictoryChart>
    </div>
  );
}
