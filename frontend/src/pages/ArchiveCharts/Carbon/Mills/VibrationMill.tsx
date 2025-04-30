import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';
import {millParams} from "./configMills.ts";

const VibrationMill: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    millParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/mill${id}`,
      dataKey: 'data',
      params: [{key: `${keyPrefix} ${id}`, label, unit: 'мм/с'}],
    }))
  ;

  return (
    <DailyChart
      title={`Мельница №${id}: Вибрация`}
      stepSize={2}
      yMin={0}
      yMax={30}
      datasets={datasets}
      backgroundZones={[
        {color: 'rgba(0,255,0,0.3)', min: 0, max: 20, label: 'Допустимая вибрация'},
        {color: 'rgba(255,255,0,0.3)', min: 20, max: 25, label: 'Повышенная вибрация'},
        {color: 'rgba(255,0,0,0.3)', min: 25, max: 30, label: 'Опасная вибрация'},
      ]}
    />
  );
};

export default VibrationMill;
