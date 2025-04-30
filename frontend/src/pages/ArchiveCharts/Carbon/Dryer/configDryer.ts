import {ConfigParam} from "../../../../components/Charts/types/configChart.ts";

export const temperatureParams: ConfigParam[] = [
  {keyPrefix: 'Температура в топке', label: 'Температура в топке'},
  {keyPrefix: 'Температура в камере смешения', label: 'Температура в камере смешения'},
  {keyPrefix: 'Температура уходящих газов', label: 'Температура уходящих газов'},
];

export const vacuumParams: ConfigParam[] = [
  {keyPrefix: 'Разрежение в топке', label: 'Разрежение в топке'},
  {keyPrefix: 'Разрежение в камере выгрузки', label: 'Разрежение в камере выгрузки'},
];