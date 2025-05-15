import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const LevelBoiler: React.FC = () => {
  const {id} = useParams();

  const apiUrl = `api/kotel${id}`;

  const datasets: Dataset[] = [
    {
      apiUrl,
      dataKey: `parameters`,
      params: [
        {
          key: `Уровень в барабане котла`,
          label: 'Уровень в котле',
          unit: 'мм',
        },
      ],
    },
    {
      apiUrl,
      dataKey: `im`,
      params: [
        {
          key: `ИМ уровня`,
          label: 'ИМ уровня',
          unit: '%',
        },
      ],
    },
  ];

  return (
    <DailyChart
      title={`Котел №${id}: Уровень в барабане котла`}
      stepSize={20}
      yMin={-100}
      yMax={100}
      datasets={datasets}
    />
  );
};

export default LevelBoiler;
