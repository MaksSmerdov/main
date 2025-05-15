import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const VacuumBoiler: React.FC = () => {
  const {id} = useParams();

  const apiUrl = `api/kotel${id}`;

  const datasets: Dataset[] = [
    {
      apiUrl,
      dataKey: `parameters`,
      params: [
        {
          key: `Разрежение в топке котла`,
          label: 'Разрежение',
          unit: 'кг/м²',
        },
      ],
    },
    {
      apiUrl,
      dataKey: `im`,
      params: [
        {
          key: `ИМ разрежения`,
          label: 'ИМ разрежения',
          unit: '%',
        },
      ],
    },
  ];

  return (
    <DailyChart
      title={`Котел №${id}: Разрежение`}
      stepSize={1}
      yMin={-13}
      yMax={13}
      datasets={datasets}
    />
  );
};

export default VacuumBoiler;
