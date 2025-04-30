import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';
import {pressureParams} from "./configMpa.ts";

const PressureMpa: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    pressureParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/mpa${id}`,
      dataKey: 'pressures',
      params: [{key: `${keyPrefix}${id}`, label, unit: 'кгс/м²'}],
    }))
  ;

  return (
    <DailyChart
      title={`МПА №${id}: Давление/Разрежение`}
      stepSize={10}
      yMin={-30}
      yMax={200}
      datasets={datasets}
    />
  );
};

export default PressureMpa;
