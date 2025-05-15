import {ConfigParam} from "../../../../components/Charts/types/configChart.ts";

export const levelHvoFirst: ConfigParam[] = [
  {keyPrefix: 'Уровень воды в емкости E1/1', label: 'Уровень воды в E1/1'},
  {keyPrefix: 'Уровень воды в емкости E1/2', label: 'Уровень воды в E1/2'},
];

export const levelHvoSecond: ConfigParam[] = [
  {keyPrefix: 'Уровень воды в E2/1 (Титан)', label: 'Уровень воды в E2/1 (Титан)'},
  {keyPrefix: 'Уровень воды в E2/1 (Мида)', label: 'Уровень воды в E2/1 (Мида)'},
]

export const flowHvoFirst: ConfigParam[] = [
  {keyPrefix: 'Расход воды на установку', label: 'Расход воды на установку'},
  {keyPrefix: 'Расход воды на промывку фильтров', label: 'Расход воды на промывку фильтров'}
]

export const flowHvoSecond: ConfigParam[] = [
  {keyPrefix: 'Расход умягченной воды после Ф4/1,2,3', label: 'Расход умягченной воды после Ф4/1,2,3'},
  {keyPrefix: 'Расход воды в канализацию', label: 'Расход воды в канализацию'}
]