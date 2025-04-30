import React from "react";
import type {Dataset} from "../../../../components/Charts/types/configChart.ts";
import DailyChart from "../../../../components/Charts/DaliyChart.tsx";
import {pressureParams} from "./configResources.ts";

const PressureResources: React.FC = () => {

  const datasets: Dataset[] =
    pressureParams.map(({device, keyPrefix, label}) => ({
      apiUrl: `api/uzliuchetacarbon/${device}`,
      dataKey: 'data',
      params: [{key: `${keyPrefix}`, label, unit: 'МПа'}],
    }))
  ;

  return (
    <DailyChart
      title={`Узлы учета: давление пара производства CARBON`}
      stepSize={0.02}
      yMin={0}
      yMax={0.5}
      datasets={datasets}
    />
  );
};

export default PressureResources;