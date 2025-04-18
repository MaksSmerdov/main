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
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/vr/2/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/vr/2/mnemo"},
        ]),
      ]),
      createSection("Динамические графики", [
        createObject(undefined, [
          {label: "График температуры", path: "http://169.254.0.156:3002/vr/graph-temper-general"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/graph-vacuums-general"},
          {label: "График уровня", path: "http://169.254.0.156:3002/vr/graph-levels-general"},
          {label: "График дозаторов нотис", path: "http://169.254.0.156:3002/vr/graph-notis-general"},
        ]),
      ]),
      createSection("Архивные графики", [
        createObject("Печь карбонизации №1", [
          {label: "График температуры", path: "/archiveTemperCarbonization"},
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
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/sushilka/1/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/sushilka/1/mnemo"},
        ]),
        createObject("Сушилка №2", [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/sushilka/2/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/sushilka/2/mnemo"},
        ]),
      ]),
      createSection("Архивные графики", [
        createObject("Сушилка №1", [
          {label: "График температур", path: "/archiveTemperCarbonization"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
        createObject("Сушилка №2", [
          {label: "График температур", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
      ]),
    ],
  },
  "МПА": {
    sections: [
      createSection("Печи МПА", [
        createObject("МПА №2", [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/mpa/2/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/mpa/2/mnemo"},
        ]),
        createObject("МПА №3", [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/mpa/3/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/mpa/3/mnemo"},
        ]),
      ]),
      createSection("Динамические графики", [
        createObject("Печи МПА", [
          {label: "График температур", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
      ]),
      createSection("Архивные графики", [
        createObject("МПА №2", [
          {label: "График температур", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
        createObject("МПА №3", [
          {label: "График температур", path: "http://169.254.0.156:3002/vr/1/current"},
          {label: "График давления/разрежения", path: "http://169.254.0.156:3002/vr/1/mnemo"},
        ]),
      ]),
    ],
  },
  "Мельницы": {
    sections: [
      createSection("Мельницы", [
        createObject(undefined, [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/current-melnizi"},
        ]),
        createObject("У.П. к.10б", [
          {label: "Графики вибрации ШБМ №3", path: "http://169.254.0.156:3002/mpa/3/current"},
          {label: "Графики вибрации YGM-9517", path: "http://169.254.0.156:3002/mpa/3/mnemo"},
          {label: "Графики вибрации YCVOK-130", path: "http://169.254.0.156:3002/mpa/3/mnemo"},
        ]),
        createObject("Carbon к.296", [
          {label: "Графики вибрации Мельницы №1", path: "http://169.254.0.156:3002/mpa/3/current"},
          {label: "Графики вибрации Мельницы №2", path: "http://169.254.0.156:3002/mpa/3/mnemo"},
        ]),
      ]),
    ]
  },
  "Отчеты по энергоресурсам": {
    sections: [
      createSection("Отчеты по энергоресурсам", [
        createObject(undefined, [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/energy-resources/current"},
        ]),
        createObject("Графики:", [
          {label: "Пар насыщенный расход", path: "http://169.254.0.156:3002/mpa/3/current"},
          {label: "Пар насыщенный давление", path: "http://169.254.0.156:3002/mpa/3/mnemo"},
        ]),
        createObject("Отчеты:", [
          {label: "Суточный отчет", path: "http://169.254.0.156:3002/mpa/3/current"},
          {label: "Месячный", path: "http://169.254.0.156:3002/mpa/3/mnemo"},
        ]),
      ]),
    ]
  },
  "Корпус 296": {
    sections: [
      createSection("Корпус 296", [
        createObject('Смоляные реактора:', [
          {label: "Текущие параметры", path: "http://169.254.0.156:3002/reactors/current"},
          {label: "Мнемосхема", path: "http://169.254.0.156:3002/reactors/mnemo"},
        ]),
        createObject("Графики:", [
          {label: "График температур", path: "http://169.254.0.156:3002/mpa/3/current"},
          {label: "График уровней", path: "http://169.254.0.156:3002/mpa/3/mnemo"},
        ]),
      ]),
    ]
  },
};
