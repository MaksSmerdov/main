import {SideBarContentData} from "../../../types/sideBar.ts";
import {createSection, createObject} from "../../../utils/utils.ts";

export const carbonFurnacesConfig: Record<string, SideBarContentData> = {
  "Печи Карбонизации": {
    sections: [
      createSection("Параметры", [
        createObject("Печь карбонизации №1", [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
        createObject("Печь карбонизации №2", [
          {label: "Текущие параметры", path: "/carbon/furnaces/2/params"},
          {label: "Мнемосхема", path: "/carbon/furnaces/2/mnemo"},
        ]),
      ]),
      createSection("Динамические графики", [
        createObject("Печь карбонизации №1", [
          {label: "График температуры", path: "/carbon/furnaces/1/temp"},
          {label: "График давления", path: "/carbon/furnaces/1/pressure"},
        ]),
        createObject("Печь карбонизации №2", [
          {label: "График температуры", path: "/carbon/furnaces/2/temp"},
          {label: "График давления", path: "/carbon/furnaces/2/pressure"},
        ]),
      ]),
      createSection("Справка", [
        createObject("Документация", [
          {label: "Инструкция", path: "/carbon/instruction"},
        ]),
      ]),
    ],
  },
};
