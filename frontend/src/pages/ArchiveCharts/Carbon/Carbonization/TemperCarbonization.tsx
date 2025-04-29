import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import {temperatureParams} from './configCarbonization.ts';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const TemperCarbonization: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    temperatureParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/vr${id}`,
      dataKey: 'temperatures',
      params: [{key: keyPrefix, label, unit: '°C'}],
    }))
  ;

  return (
    <DailyChart
      title={`Печь карбонизации №${id}: Температура`}
      stepSize={100}
      yMin={0}
      yMax={1500}
      datasets={datasets}
    />
  );
};

export default TemperCarbonization;
