import {ConfigParam} from "../../../../components/Charts/types/configChart.ts";

export const pressureParams: ConfigParam[] = [
  {device: 'de093', keyPrefix: 'Давление DE093', label: 'МПА2'},
  {device: 'dd972', keyPrefix: 'Давление DD972', label: 'МПА3'},
  {device: 'dd973', keyPrefix: 'Давление DD973', label: 'МПА4'},
  {device: 'dd576', keyPrefix: 'Давление DD576', label: 'к.10в1'},
  {device: 'dd569', keyPrefix: 'Давление DD569', label: 'От к.265 до к.10в1'},
  {device: 'dd923', keyPrefix: 'Давление DD923', label: 'Котел утилизатор №1'},
  {device: 'dd924', keyPrefix: 'Давление DD924', label: 'Котел утилизатор №2'},
];

export const consumptionParams: ConfigParam[] = [
  {device: 'de093', keyPrefix: 'Тонн/ч DE093', label: 'МПА2'},
  {device: 'dd972', keyPrefix: 'Тонн/ч DD972', label: 'МПА3'},
  {device: 'dd973', keyPrefix: 'Тонн/ч DD973', label: 'МПА4'},
];
