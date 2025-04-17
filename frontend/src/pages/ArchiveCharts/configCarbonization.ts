import {Config, ConfigParam} from "../../components/Charts/types/configChart.ts";

export const carbonizationConfigs: Config[] = [
  {id: '1', showIntervalSelector: true},
  {id: '2', showIntervalSelector: false},
];

export const temperatureParams: ConfigParam[] = [
  {keyPrefix: 'В топке', label: 'В топке'},
  {keyPrefix: 'Камеры выгрузки', label: 'Камеры выгрузки'},
  {keyPrefix: '1-СК', label: '1-СК'},
  {keyPrefix: '2-СК', label: '2-СК'},
  {keyPrefix: '3-СК', label: '3-СК'},
  {keyPrefix: 'Вверху камеры загрузки', label: 'Вверху камеры загрузки'},
  {keyPrefix: 'Внизу камеры загрузки', label: 'Внизу камеры загрузки'},
  {keyPrefix: 'На входе печи дожига', label: 'На входе печи дожига'},
  {keyPrefix: 'На выходе печи дожига', label: 'На выходе печи дожига'},
  {keyPrefix: 'Дымовых газов котла', label: 'Дымовых газов котла'},
  {keyPrefix: 'Газов до скруббера', label: 'Газов до скруббера'},
  {keyPrefix: 'Газов после скруббера', label: 'Газов после скруббера'},
  {keyPrefix: 'Воды в ванне скруббера', label: 'Воды в ванне скруббера'},
  {keyPrefix: 'Гранул после холод-ка', label: 'Гранул после холод-ка'},
];

export const pressureParams: ConfigParam[] = [
  {
    keyPrefix: 'Давление газов после скруббера',
    label: 'Давление газов после скруббера',
    unit: 'кгс/м²',
  },
  {keyPrefix: 'Пара в барабане котла', label: 'Давление пара в барабане котла', unit: 'кгс/см²'},
];

export const vacuumParams: ConfigParam[] = [
  {keyPrefix: 'В топке печи', label: 'Разрежение в топке печи'},
  {keyPrefix: 'Низ загрузочной камеры', label: 'Разрежение внизу камеры загрузки'},
  {keyPrefix: 'В котле утилизаторе', label: 'Разрежение в котле утилизаторе'},
];
