import React from "react";
import type {Dataset} from "../../../../components/Charts/types/configChart.ts";
import {millSBMParams} from "./configMills.ts";
import DailyChart from "../../../../components/Charts/DaliyChart.tsx";

const VibrationSBM: React.FC = () => {

  const datasets: Dataset[] =
    millSBMParams.map(({keyPrefix, label}) => ({
      apiUrl: `api/mill10b`,
      dataKey: 'data',
      params: [{key: `${keyPrefix}`, label, unit: 'мм/с'}],
    }))
  ;

  return (
    <DailyChart
      title={`Мельница ШБМ №3: Вибрация`}
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

export default VibrationSBM;