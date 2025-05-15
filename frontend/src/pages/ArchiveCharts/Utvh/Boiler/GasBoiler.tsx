import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const GasBoiler: React.FC = () => {
  const {id} = useParams();

  const apiUrl = `api/kotel${id}`;

  const datasets: Dataset[] = [
    {
      apiUrl,
      dataKey: `parameters`,
      params: [
        {
          key: `Давление газа перед горелкой`,
          label: 'Давление газа',
          unit: 'кг/м²',
        },
      ],
    },
    {
      apiUrl,
      dataKey: `im`,
      params: [
        {
          key: `ИМ газа`,
          label: 'ИМ газа',
          unit: '%',
        },
      ],
    },
  ];

  return (
    <DailyChart
      title={`Котел №${id}: Давление газа`}
      stepSize={500}
      yMin={0}
      yMax={4000}
      datasets={datasets}
    />
  );
};

export default GasBoiler;
