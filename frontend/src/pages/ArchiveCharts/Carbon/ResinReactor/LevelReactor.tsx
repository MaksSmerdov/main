import React from "react";
import type {Dataset} from "../../../../components/Charts/types/configChart.ts";
import DailyChart from "../../../../components/Charts/DaliyChart.tsx";
import {levelsParams} from "./configReactor.ts";

const LevelReactor: React.FC = () => {

  const datasets: Dataset[] =
    levelsParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/reactorK296`,
      dataKey: 'levels',
      params: [{key: `${keyPrefix}`, label, unit: 'мм'}],
    }))
  ;

  return (
    <DailyChart
      title={`Смоляные реактора: Уровень`}
      stepSize={100}
      yMin={0}
      yMax={2500}
      datasets={datasets}
    />
  );
};

export default LevelReactor;