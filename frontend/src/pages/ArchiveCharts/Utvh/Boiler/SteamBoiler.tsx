import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const SteamBoiler: React.FC = () => {
  const {id} = useParams();

  const apiUrl = `api/kotel${id}`;

  const datasets: Dataset[] = [
    {
      apiUrl,
      dataKey: `parameters`,
      params: [
        {
          key: `Давление пара на выходе`,
          label: 'Давление пара',
          unit: 'кг/см²',
        },
      ],
    },
  ];

  return (
    <DailyChart
      title={`Котел №${id}: Давление пара`}
      stepSize={1}
      yMin={0}
      yMax={10}
      datasets={datasets}
    />
  );
};

export default SteamBoiler;
