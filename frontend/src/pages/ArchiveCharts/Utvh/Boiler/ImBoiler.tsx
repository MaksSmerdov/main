import React from 'react';
import {useParams} from 'react-router-dom';
import DailyChart from '../../../../components/Charts/DaliyChart.tsx';
import type {Dataset} from '../../../../components/Charts/types/configChart.ts';
import {imParams} from "./configBoiler.ts";

const ImBoiler: React.FC = () => {
  const {id} = useParams();

  const datasets: Dataset[] =
    imParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/kotel${id}`,
      dataKey: 'im',
      params: [{key: keyPrefix, label, unit: '%'}],
    }))
  ;

  return (
    <DailyChart
      title={`Котел №${id}: Положение ИМ`}
      stepSize={10}
      yMin={0}
      yMax={100}
      datasets={datasets}
    />
  );
};

export default ImBoiler;
