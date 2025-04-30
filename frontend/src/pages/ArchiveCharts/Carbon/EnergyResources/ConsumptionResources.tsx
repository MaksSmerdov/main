import React from "react";
import type {Dataset} from "../../../../components/Charts/types/configChart.ts";
import DailyChart from "../../../../components/Charts/DaliyChart.tsx";
import {consumptionParams} from "./configResources.ts";

const ConsumptionResources: React.FC = () => {

  const datasets: Dataset[] =
    consumptionParams.map(({device, keyPrefix, label}) => ({
      apiUrl: `api/uzliuchetacarbon/${device}`,
      dataKey: 'data',
      params: [{key: `${keyPrefix}`, label, unit: 'Тонн/ч'}],
    }))
  ;

  return (
    <DailyChart
      title={`Узлы учета: расход пара на МПА`}
      stepSize={1}
      yMin={0}
      yMax={5}
      datasets={datasets}
    />
  );
};

export default ConsumptionResources;