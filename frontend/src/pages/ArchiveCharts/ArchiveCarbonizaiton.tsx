// ArchiveTemperCarbonization.tsx
import React, {useMemo} from 'react';
import DailyChart from "../../components/Charts/DaliyChart.tsx";
import {temperatureParams} from './configCarbonization.ts';
import type {Dataset} from '../../components/Charts/types/configChart.ts';

const createDatasets = (): Dataset[] =>
  temperatureParams.map(({keyPrefix, label}) => ({
    apiUrl: 'vr1',
    dataKey: 'temperatures',
    params: [{key: keyPrefix, label, unit: '°C'}],
  }));

const ArchiveTemperCarbonization: React.FC = () => {
  /** ➜ создаём один раз */
  const datasets = useMemo(createDatasets, []);

  return (
    <DailyChart
      id="DryerTemperDaily#1"
      title="Суточный тест"
      yMin={0}
      yMax={1500}
      datasets={datasets}
    />
  );
};

export default ArchiveTemperCarbonization;
