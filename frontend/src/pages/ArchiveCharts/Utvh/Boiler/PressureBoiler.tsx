import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const PressureBoiler: React.FC = () => {
  const {id} = useParams();

  const apiUrl = `api/kotel${id}`;

  const datasets: Dataset[] = [
    {
      apiUrl,
      dataKey: `parameters`,
      params: [
        {
          key: `Давление воздуха перед горелкой`,
          label: 'Давление воздуха',
          unit: 'кг/см²',
        },
      ],
    },
    {
      apiUrl,
      dataKey: `im`,
      params: [
        {
          key: `ИМ воздуха`,
          label: 'ИМ воздуха',
          unit: '%',
        },
      ],
    },
  ];

  return (
    <DailyChart
      title={`Котел №${id}: Давление воздуха`}
      stepSize={20}
      yMin={0}
      yMax={200}
      datasets={datasets}
    />
  );
};

export default PressureBoiler;
