import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import {pressureParams, vacuumParams} from './configCarbonization.ts';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';

const PressureCarbonization: React.FC = () => {
  const {id} = useParams();

  const apiUrl = `api/vr${id}`;
  
  const datasets: Dataset[] = [
    ...pressureParams.map(({keyPrefix, label, unit}) => ({
      apiUrl,
      dataKey: 'pressures',
      params: [{key: keyPrefix, label, unit}],
    })),
    ...vacuumParams.map(({keyPrefix, label}) => ({
      apiUrl,
      dataKey: 'vacuums',
      params: [{key: keyPrefix, label, unit: 'кгс/м²'}],
    })),
  ];

  return (
    <DailyChart
      title={`Печь карбонизации №${id}: Давление/Разрежение`}
      stepSize={5}
      yMin={-20}
      yMax={30}
      datasets={datasets}
    />
  );
};

export default PressureCarbonization;
