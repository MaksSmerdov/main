import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const LevelCarbonization: React.FC = () => {
  const {id} = useParams();

  const apiUrl = `api/vr${id}`;

  const datasets: Dataset[] = [
    {
      apiUrl,
      dataKey: `levels`,
      nestedKey: 'value',
      params: [
        {
          key: `В барабане котла`,
          label: 'Уровень в котле-утилизаторе',
          unit: 'мм',
        },
      ],
    },
    {
      apiUrl,
      dataKey: `im`,
      params: [
        {
          key: `ИМ5 котел-утилизатор`,
          label: 'Процент открытия ИМ5',
          unit: '%',
        },
      ],
    },
  ];

  return (
    <DailyChart
      title={`Печь карбонизации №${id}: Уровень в котле-утилизаторе`}
      stepSize={20}
      yMin={-200}
      yMax={200}
      datasets={datasets}
    />
  );
};

export default LevelCarbonization;
