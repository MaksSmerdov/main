import React from "react";
import {useParams} from "react-router-dom";
import type {Dataset} from "../../../../components/Charts/types/configChart.ts";
import {levelHvoFirst, levelHvoSecond} from "./configHvo.ts";
import DailyChart from "../../../../components/Charts/DaliyChart.tsx";

const LevelHvo: React.FC = () => {
  const {id} = useParams();

  const datasetsFirst: Dataset[] =
    levelHvoFirst.map(({keyPrefix, label}) => ({
      apiUrl: `api/hvo${id}`,
      dataKey: 'levels',
      params: [{key: keyPrefix, label, unit: 'мм'}],
    }))
  ;
  const datasetsSecond: Dataset[] =
    levelHvoSecond.map(({keyPrefix, label}) => ({
      apiUrl: `api/hvo${id}`,
      dataKey: 'levels',
      params: [{key: keyPrefix, label, unit: 'мм'}],
    }))
  ;
  if (id === '1') {
    return (
      <DailyChart
        title={`ХВО №${id}: Уровень`}
        stepSize={200}
        yMin={0}
        yMax={2000}
        datasets={datasetsFirst}
      />
    );
  } else {
    return (
      <DailyChart
        title={`ХВО №${id}: Уровень`}
        stepSize={500}
        yMin={0}
        yMax={6500}
        datasets={datasetsSecond}
      />
    );
  }

}

export default LevelHvo;