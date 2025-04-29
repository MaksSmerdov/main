import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import {levelPercentParams} from './configCarbonization.ts';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const LevelPercentCarbonization: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    levelPercentParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/vr${id}`,
      dataKey: 'levels',
      nestedKey: 'percent',
      params: [{key: keyPrefix, label, unit: '%'}],
    }))
  ;

  return (
    <DailyChart
      title={`Печь карбонизации №${id}: Уровни (%)`}
      stepSize={5}
      yMin={0}
      yMax={100}
      datasets={datasets}
    />
  );
};

export default LevelPercentCarbonization;
