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
            configs: [
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
          }
        ]
      ),
      createSection("Архивные графики", [
        createObject("Котел №1", [
          {label: "График уровня в котле", path: "/LevelBoiler/1"},
          {label: "График давления газа", path: "/GasBoiler/1"},
          {label: "График разрежения", path: "/VacuumBoiler/1"},
          {label: "График давления воздуха", path: "/PressureBoiler/1"},
          {label: "График давления пара", path: "/SteamBoiler/1"},
          {label: "График открытия ИМ", path: "/ImBoiler/1"},
        ]),
        createObject("Котел №2", [
          {label: "График уровня в котле", path: "/LevelBoiler/2"},
          {label: "График давления газа", path: "/GasBoiler/2"},
          {label: "График разрежения", path: "/VacuumBoiler/2"},
          {label: "График давления воздуха", path: "/PressureBoiler/2"},
          {label: "График давления пара", path: "/SteamBoiler/2"},
          {label: "График открытия ИМ", path: "/ImBoiler/2"},
        ]),
        createObject("Котел №3", [
          {label: "График уровня в котле", path: "/LevelBoiler/3"},
          {label: "График давления газа", path: "/GasBoiler/3"},
          {label: "График разрежения", path: "/VacuumBoiler/3"},
          {label: "График давления воздуха", path: "/PressureBoiler/3"},
          {label: "График давления пара", path: "/SteamBoiler/3"},
          {label: "График открытия ИМ", path: "/ImBoiler/3"},
        ]),
        createObject("ХВО №1", [
          {label: "График уровня в емкостях", path: "/LevelHvo/1"},
          {label: "График расхода воды", path: "/FlowHvo/1"},
        ]),
        createObject("ХВО №2", [
          {label: "График уровня в емкостях", path: "/LevelHvo/2"},
          {label: "График расхода воды", path: "/FlowHvo/2"},
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
            configs: [
              {
                label: "Генерация отопительной воды",
                basePath: 'http://Techsite5/kaskad/graphics/podmeshka/rashodOtopitVoda/',
                suffix: "_podmeshka_rashod_otop_voda.jpg"
              }
            ]
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
            configs: [
              {
                label: "Генерация отопительной воды",
                basePath: 'http://Techsite5/kaskad/graphics/teploobmennikRashodOtopVoda/',
                suffix: "_teploobmennikRashodOtopVoda.jpg"
              }
            ]
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
            configs: [
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
          }
        ]
      ),
    ],
  },
}