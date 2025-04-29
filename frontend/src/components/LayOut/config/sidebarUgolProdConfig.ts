import {SideBarContentData} from "../../../types/sideBar.ts";
import {createSection, createObject} from "../../../utils/utils";

export const ugolProductionConfig: Record<string, SideBarContentData> = {
  "Вр. печи активации к.266": {
    sections: [
      createSection("У.П. к.266 Вр. печи", [
        createObject(undefined, [
          {label: "Текущие параметры печи №1", path: "/carbon/furnaces/1/params"},
          {label: "Текущие параметры печи №2", path: "/carbon/furnaces/1/mnemo"},
          {label: "Текущие параметры печи №3", path: "/carbon/furnaces/1/mnemo"},
        ]),
      ]),
      createSection(undefined, [
        createObject("Графики за выбранные сутки:", [
          {label: "График температур печь №1", path: "/carbon/furnaces/1/params"},
          {label: "График температур печь №2", path: "/carbon/furnaces/1/mnemo"},
          {label: "График температур печь №3", path: "/carbon/furnaces/1/mnemo"},
        ]),
      ]),
    ],
  },
  "Отделение активации к.10б": {
    sections: [
      createSection("У.П. к.10б Печи МПА", [
        createObject(undefined, [
          {label: "Текущие параметры", path: "/carbon/furnaces/1/params"},
        ]),
      ]),
      createSection(undefined, [
        createObject("Графики за выбранные сутки:", [
          {label: "График температур МПА-11", path: "/carbon/furnaces/1/params"},
          {label: "График температур МПА-12", path: "/carbon/furnaces/1/mnemo"},
          {label: "График расхода пара МПА", path: "/carbon/furnaces/1/mnemo"},
        ]),
      ]),
    ],
  },
  "Отделение карбонизации к.10б": {
    sections: [
      createSection("У.П. к.10б Отделение сушки и карбонизации", [
        createObject(undefined, [
          {label: "Текущие параметры", path: "/carbon/furnaces/1/params"},
        ]),
      ]),
      createSection(undefined, [
        createObject("Графики за выбранные сутки:", [
          {label: "График температур Сушилка 1", path: "/carbon/furnaces/1/params"},
          {label: "График температур Сушилка 3", path: "/carbon/furnaces/1/mnemo"},
          {label: "График температур Сушилка 4", path: "/carbon/furnaces/1/mnemo"},
          {label: "График температур Печи Карбонизации 5", path: "/carbon/furnaces/1/params"},
          {label: "График температур Печи Карбонизации 6", path: "/carbon/furnaces/1/mnemo"},
          {label: "График температур Печи Карбонизации 7", path: "/carbon/furnaces/1/mnemo"},
          {label: "График разрежения", path: "/carbon/furnaces/1/params"},
          {label: "График температуры смолы", path: "/carbon/furnaces/1/mnemo"},
          {label: "График уровня смолы", path: "/carbon/furnaces/1/mnemo"},
        ]),
      ]),
    ],
  },
  "Смолохозяйство": {
    sections: [
      createSection("У.П. Смолохозяйство к.13 Насосы №3,4", [
        createObject("Графики за выбранные сутки:", [
          {label: "График включения насосов", path: "/carbon/furnaces/1/params"},
        ]),
      ]),
    ],
  },
  "Корп. 9а": {
    sections: [
      createSection("У.П. к.9а Печь кипящего слоя", [
        createObject(undefined, [
          {label: "Текущие параметры", path: "/carbon/furnaces/1/params"},
        ]),
      ]),
      createSection(undefined, [
        createObject("Графики за выбранные сутки:", [
          {label: "График температуры в топке", path: "/carbon/furnaces/1/params"},
          {label: "Графики температур в секциях", path: "/carbon/furnaces/1/mnemo"},
          {label: "График расхода газа", path: "/carbon/furnaces/1/mnemo"},
          {label: "График расхода воздуха", path: "/carbon/furnaces/1/params"},
        ]),
      ]),
    ],
  },
  "Расход пара": {
    sections: [
      createSection("Угольное производство", [
        createObject(undefined, [
          {label: "Текущие параметры", path: "/carbon/furnaces/1/params"},
        ]),
      ]),
      createSection(undefined, [
        createObject("Графики за выбранные сутки:", [
          {label: "Графики давления", path: "/carbon/furnaces/1/params"},
        ]),
      ]),
    ],
  },
};
