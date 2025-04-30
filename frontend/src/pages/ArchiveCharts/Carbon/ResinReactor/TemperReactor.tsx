import React from "react";
import type {Dataset} from "../../../../components/Charts/types/configChart.ts";
import DailyChart from "../../../../components/Charts/DaliyChart.tsx";
import {temperatureParams} from "./configReactor.ts";

const TemperReactor: React.FC = () => {

  const datasets: Dataset[] =
    temperatureParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/reactorK296`,
      dataKey: 'temperatures',
      params: [{key: `${keyPrefix}`, label, unit: '°C'}],
    }))
  ;

  return (
    <DailyChart
      title={`Смоляные реактора: Температура`}
      stepSize={5}
      yMin={0}
      yMax={100}
      datasets={datasets}
    />
  );
};

export default TemperReactor;