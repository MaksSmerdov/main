import {SideBarContentData} from "../../../../types/sideBar.ts";
import {createGraphsWithDateSection, createObject, createSection} from "../../../../utils/utils.tsx";
import dayjs from "dayjs";

export const utvhConfig: Record<string, SideBarContentData> = {
  "Архивные графики": {
    sections: [
      createGraphsWithDateSection(
        'Котельная к.265',
        dayjs(),
        [
          {
            label: "Расход пара",
            basePath: 'http://Techsite5/kaskad/graphics/Kotelnaya/',
            suffix: "_Par_kotel.jpg"
          },
          {
            label: "Давление пара",
            basePath: 'http://Techsite5/kaskad/graphics/KotelnayaDavlPar/',
            suffix: "_kotelnaya_davl_par.jpg"
          }
        ]
      ),
      createSection("Архивные графики", [
        createObject("Котел №1", [
          {label: "График уровня в котле", path: "/TemperCarbonization/1"},
          {label: "График давления газа", path: "/PressureCarbonization/1"},
          {label: "График разрежения", path: "/LevelCarbonization/1"},
          {label: "График давления воздуха", path: "/LevelPercentCarbonization/1"},
          {label: "График открытия ИМ", path: "/NotisCarbonization/1"},
        ]),
        createObject("Котел №2", [
          {label: "График уровня в котле", path: "/TemperCarbonization/1"},
          {label: "График давления газа", path: "/PressureCarbonization/1"},
          {label: "График разрежения", path: "/LevelCarbonization/1"},
          {label: "График давления воздуха", path: "/LevelPercentCarbonization/1"},
          {label: "График открытия ИМ", path: "/NotisCarbonization/1"},
        ]),
        createObject("Котел №3", [
          {label: "График уровня в котле", path: "/TemperCarbonization/1"},
          {label: "График давления газа", path: "/PressureCarbonization/1"},
          {label: "График разрежения", path: "/LevelCarbonization/1"},
          {label: "График давления воздуха", path: "/LevelPercentCarbonization/1"},
          {label: "График открытия ИМ", path: "/NotisCarbonization/1"},
        ]),
      ]),
    ],
  },
  "Станция подмешивания": {
    sections: [
      createSection("Станция подмешивания", [
        createObject(undefined, [
          {
            label: "Текущие параметры",
            path: "http://techsite5/kaskad/Web_Clnt.dll/ShowPage?production/utvh/podmeshka/currentParam-podmeshka.htm"
          },
        ]),
      ]),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "Генерация отопительной воды",
            basePath: 'http://Techsite5/kaskad/graphics/podmeshka/rashodOtopitVoda/',
            suffix: "_podmeshka_rashod_otop_voda.jpg"
          }
        ]
      ),
    ],
  },
  "Теплообменник": {
    sections: [
      createSection("Теплообменник к.265", [
        createObject('Контур отопления', [
          {
            label: "Текущие параметры",
            path: "http://techsite5/kaskad/Web_Clnt.dll/ShowPage?production/utvh/teploobmennikK265/currentParam-teploobmennikK265.htm"
          },
        ]),
      ]),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "Генерация отопительной воды",
            basePath: 'http://Techsite5/kaskad/graphics/teploobmennikRashodOtopVoda/',
            suffix: "_teploobmennikRashodOtopVoda.jpg"
          }
        ]
      ),
    ],
  },
  "Отчеты по энергоресурсам": {
    sections: [
      createGraphsWithDateSection(
        'Отчеты: отопление',
        dayjs(),
        [
          {
            label: "Суточный отчет",
            basePath: 'http://TechSite5/kaskad/reports/sorbent/Day/uzli_ucheta_utvh/uzli_ucheta_utvh_',
            suffix: ".htm"
          },
          {
            label: "Месячный отчет",
            monthly: true,
            basePath: 'http://TechSite5/kaskad/Reports/sorbent/Month/uzli_ucheta_utvh/uzli_ucheta_utvh_',
            suffix: ".htm"
          }
        ]
      ),
    ],
  },
}