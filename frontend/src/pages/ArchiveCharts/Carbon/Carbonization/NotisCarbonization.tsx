import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import {notisParams} from './configCarbonization.ts';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const NotisCarbonization: React.FC = () => {
  const {id} = useParams();

  const filtered = notisParams.filter(
    ({keyPrefix}) => keyPrefix.includes(`НОТИС${id}`)
  );

  const datasets: Dataset[] = filtered.map(({keyPrefix, label}) => ({
    apiUrl: `api/notis${id}`,
    dataKey: 'data',
    params: [{key: keyPrefix, label, unit: 'кг/ч'}],
  }));

  return (
    <DailyChart
      title={`Печь карбонизации №${id}: Дозатор нотис`}
      stepSize={100}
      yMin={0}
      yMax={1000}
      datasets={datasets}
    />
  );
};

export default NotisCarbonization;
