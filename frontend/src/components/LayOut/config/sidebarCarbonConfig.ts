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
      createSection("Архивные графики", [
        createObject(undefined, [
          {label: "График температуры", path: "/carbon/furnaces/1/temp"},
          {label: "График давления/разрежения", path: "/carbon/furnaces/1/pressure"},
          {label: "График уровня", path: "/carbon/furnaces/1/pressure"},
          {label: "График дозаторов нотис", path: "/carbon/furnaces/1/pressure"},
        ]),
      ]),
      createSection("Динамические графики", [
        createObject("Печь карбонизации №1", [
          {label: "График температуры", path: "/carbon/furnaces/1/temp"},
          {label: "График давления/разрежения", path: "/carbon/furnaces/1/pressure"},
          {label: "График уровня", path: "/carbon/furnaces/1/pressure"},
          {label: "График дозаторов нотис", path: "/carbon/furnaces/1/pressure"},
        ]),
        createObject("Печь карбонизации №2", [
          {label: "График температуры", path: "/carbon/furnaces/1/temp"},
          {label: "График давления/разрежения", path: "/carbon/furnaces/1/pressure"},
          {label: "График уровня", path: "/carbon/furnaces/1/pressure"},
          {label: "График дозаторов нотис", path: "/carbon/furnaces/1/pressure"},
        ]),
      ]),
      createSection("Справка", [
        createObject("Документация", [
          {label: "Инструкция", path: "/carbon/instruction"},
        ]),
      ]),
    ],
  },
  "Сушилки": {
    sections: [
      createSection("Сушилки", [
        createObject("Сушилка №1", [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
        createObject("Сушилка №2", [
          {label: "Текущие параметры", path: "/carbon/furnaces/2/params"},
          {label: "Мнемосхема", path: "/carbon/furnaces/2/mnemo"},
        ]),
      ]),
      createSection("Архивные графики", [
        createObject("Сушилка №1", [
          {label: "График температур", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
        createObject("Сушилка №2", [
          {label: "График температур", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
      ]),
    ],
  },
};
