import React from "react";
import {useParams} from "react-router-dom";
import type {Dataset} from "../../../../components/Charts/types/configChart.ts";
import {flowHvoFirst, flowHvoSecond} from "./configHvo.ts";
import DailyChart from "../../../../components/Charts/DaliyChart.tsx";

const FlowHvo: React.FC = () => {
  const {id} = useParams();

  const datasetsFirst: Dataset[] =
    flowHvoFirst.map(({keyPrefix, label}) => ({
      apiUrl: `api/hvo${id}`,
      dataKey: 'flows',
      params: [{key: keyPrefix, label, unit: 'м³/ч'}],
    }))
  ;
  const datasetsSecond: Dataset[] =
    flowHvoSecond.map(({keyPrefix, label}) => ({
      apiUrl: `api/hvo${id}`,
      dataKey: 'flows',
      params: [{key: keyPrefix, label, unit: 'м³/ч'}],
    }))
  ;
  if (id === '1') {
    return (
      <DailyChart
        title={`ХВО №${id}: Расход`}
        stepSize={20}
        yMin={0}
        yMax={200}
        datasets={datasetsFirst}
      />
    );
  } else {
    return (
      <DailyChart
        title={`ХВО №${id}: Расход`}
        stepSize={20}
        yMin={0}
        yMax={200}
        datasets={datasetsSecond}
      />
    );
  }

}

export default FlowHvo;