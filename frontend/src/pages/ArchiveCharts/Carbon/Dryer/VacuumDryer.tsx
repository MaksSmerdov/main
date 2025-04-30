import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';
import {vacuumParams} from "./configDryer.ts";

const VacuumDryer: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    vacuumParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/sushilka${id}`,
      dataKey: 'vacuums',
      params: [{key: keyPrefix, label, unit: 'кгс/м²'}],
    }))
  ;

  return (
    <DailyChart
      title={`Сушилка №${id}: Давление/разрежение`}
      stepSize={2}
      yMin={-20}
      yMax={10}
      datasets={datasets}
    />
  );
};

export default VacuumDryer;
