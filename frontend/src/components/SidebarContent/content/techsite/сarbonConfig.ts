import {SideBarContentData} from "../../../../types/sideBar.ts";
import {createSection, createObject} from "../../../../utils/utils.tsx";

export const carbonConfig: Record<string, SideBarContentData> = {
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
          {label: "График температуры", path: "/TemperCarbonization/1"},
          {label: "График давления/разрежения", path: "/PressureCarbonization/1"},
          {label: "Уровень в котле-утилизаторе", path: "/LevelCarbonization/1"},
          {label: "График уровня в %", path: "/LevelPercentCarbonization/1"},
          {label: "График дозаторов нотис", path: "/NotisCarbonization/1"},
        ]),
        createObject("Печь карбонизации №2", [
          {label: "График температуры", path: "/TemperCarbonization/2"},
          {label: "График давления/разрежения", path: "/PressureCarbonization/2"},
          {label: "Уровень в котле-утилизаторе", path: "/LevelCarbonization/2"},
          {label: "График уровня в %", path: "/LevelPercentCarbonization/2"},
          {label: "График дозаторов нотис", path: "/NotisCarbonization/2"},
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
          {label: "График температур", path: "/TemperDryer/1"},
          {label: "График давления/разрежения", path: "/VacuumDryer/1"},
        ]),
        createObject("Сушилка №2", [
          {label: "График температур", path: "/TemperDryer/2"},
          {label: "График давления/разрежения", path: "/VacuumDryer/1"},
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
      createSection("Общие динамические графики", [
        createObject("Печи МПА", [
          {label: "Графики МПА2 и МПА3", path: "http://169.254.0.156:3002/mpa/grah-general"},
        ]),
      ]),
      createSection("Архивные графики", [
        createObject("МПА №2", [
          {label: "График температур", path: "/TemperMpa/2"},
          {label: "График давления/разрежения", path: "/PressureMpa/2"},
        ]),
        createObject("МПА №3", [
          {label: "График температур", path: "/TemperMpa/3"},
          {label: "График давления/разрежения", path: "/PressureMpa/3"},
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
          {label: "Графики вибрации ШБМ №3", path: "/VibrationSBM"},
          {label: "Графики вибрации YGM-9517", path: "/VibrationYGM"},
          {label: "Графики вибрации YCVOK-130", path: "/VibrationYCVOK"},
        ]),
        createObject("Carbon к.296", [
          {label: "Графики вибрации Мельницы №1", path: "/VibrationMill/1"},
          {label: "Графики вибрации Мельницы №2", path: "/VibrationMill/2"},
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
          {label: "Пар насыщенный расход", path: "/ConsumptionResources"},
          {label: "Пар насыщенный давление", path: "/PressureResources"},
        ]),
        createObject("Отчеты:", [
          {label: "Суточный отчет", path: "http://169.254.0.156:3002/energy-resources/report-day"},
          {label: "Месячный", path: "http://169.254.0.156:3002/energy-resources/report-month"},
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
          {label: "График температур", path: "/TemperReactor"},
          {label: "График уровней", path: "/LevelReactor"},
        ]),
      ]),
    ]
  },
};
