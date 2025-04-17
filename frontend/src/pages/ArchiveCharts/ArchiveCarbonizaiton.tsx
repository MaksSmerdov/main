import React from 'react';
import DailyChart from "../../components/Charts/DaliyChart.tsx";
import {Dataset} from "../../components/Charts/types/configChart.ts";
import {temperatureParams} from "./configCarbonization.ts";

const createDatasets = (): Dataset[] =>
  temperatureParams.map(({keyPrefix, label}) => ({
    apiUrl: `vr1`,
    dataKey: 'temperatures',
    params: [
      {
        key: `${keyPrefix}`,
        label,
        unit: '°C',
      },
    ],
  }));

const ArchiveTemperCarbonization: React.FC = () => {
  return (
    <DailyChart
      key={`Temper daily`}
      id={`Dryer temper daily №1`}
      title="Суточный тест"
      yMin={0}
      yMax={1500}
      datasets={createDatasets()}
    />
  );
};

export default ArchiveTemperCarbonization;
