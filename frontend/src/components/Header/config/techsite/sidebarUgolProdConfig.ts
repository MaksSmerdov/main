import {SideBarContentData} from "../../../../types/sideBar.ts";
import {createSection, createObject, createGraphsWithDateSection} from "../../../../utils/utils.tsx";
import dayjs from "dayjs";

const servkarbonPath = 'http://servkarbon/kaskad/graphic/'

export const ugolProductionConfig: Record<string, SideBarContentData> = {
  "Вр. печи активации к.266": {
    sections: [
      createSection("У.П. к.266 Вр. печи", [
        createObject(undefined, [
          {
            label: "Текущие параметры печи №1",
            path: "http://techsite3/kaskad/Web_Clnt.dll/ShowPage?production/ugolProduction/pechiVrK266/currentParam-pechVr-1.htm"
          },
          {
            label: "Текущие параметры печи №2",
            path: "http://techsite3/kaskad/Web_Clnt.dll/ShowPage?production/ugolProduction/pechiVrK266/currentParam-pechVr-2.htm"
          },
          {
            label: "Текущие параметры печи №3",
            path: "http://techsite3/kaskad/Web_Clnt.dll/ShowPage?production/ugolProduction/pechiVrK266/currentParam-pechVr-3.htm"
          },
        ]),
      ]),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "График температур печь №1",
            basePath: 'http://Techsite3/kaskad/graphics/k266pechiVr/',
            suffix: "_1.jpg"
          },
          {
            label: "График температур печь №2",
            basePath: 'http://Techsite3/kaskad/graphics/k266pechiVr/',
            suffix: "_2.jpg"
          },
          {
            label: "График температур печь №3",
            basePath: 'http://Techsite3/kaskad/graphics/k266pechiVr/',
            suffix: "_3.jpg"
          },
        ]
      ),
    ],
  },
  "Отделение активации к.10б": {
    sections: [
      createSection("У.П. к.10б Печи МПА", [
        createObject(undefined, [
          {
            label: "Текущие параметры",
            path: "http://servactive/kaskad/Web_Clnt.dll/ShowPage?production/ugolProduction/korp10b/currentParam-korp10b-activaziya.htm"
          },
        ]),
      ]),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "График температур МПА-11",
            basePath: 'http://Servactive/kaskad/graphics/',
            suffix: "_T11.jpg"
          },
          {
            label: "График температур МПА-12",
            basePath: 'http://Servactive/kaskad/graphics/',
            suffix: "_T12.jpg"
          },
          {
            label: "График расход пара МПА",
            basePath: 'http://Servactive/kaskad/graphics/',
            suffix: "_Q11.jpg"
          },
        ]
      ),
    ],
  },
  "Отделение карбонизации к.10б": {
    sections: [
      createSection("У.П. к.10б Отделение сушки и карбонизации", [
        createObject(undefined, [
          {
            label: "Текущие параметры",
            path: "http://Servkarbon/kaskad/Web_Clnt.dll/ShowPage?production/ugolProduction/korp10b/currentParam-korp10b-carbonizaziya.htm"
          },
        ]),
      ]),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "График температуры Сушилка-1",
            basePath: servkarbonPath,
            suffix: "_sushilka_1_T.jpg"
          },
          {
            label: "График температуры Сушилка-3",
            basePath: servkarbonPath,
            suffix: "_sushilka_3_T.jpg"
          },
          {
            label: "График температуры Сушилка-4",
            basePath: servkarbonPath,
            suffix: "_sushilka_4_T.jpg"
          },
          {
            label: "График температуры Печь карбонизации-5",
            basePath: servkarbonPath,
            suffix: "_pech_carbon_5_T.jpg"

          },
          {
            label: "График температуры Печь карбонизации-6",
            basePath: servkarbonPath,
            suffix: "_pech_carbon_6_T.jpg"
          },
          {
            label: "График температуры Печь карбонизации-7",
            basePath: servkarbonPath,
            suffix: "_pech_carbon_7_T.jpg"
          },
          {
            label: "График разрежения",
            basePath: servkarbonPath,
            suffix: "_pechi_razreg.jpg"
          },
          {
            label: "График температуры смолы",
            basePath: servkarbonPath,
            suffix: "_smola_T.jpg"
          },
          {
            label: "График уровня смолы",
            basePath: servkarbonPath,
            suffix: "_smola_L.jpg"
          },
        ]
      ),
    ],
  },
  "Смолохозяйство": {
    sections: [
      createSection("У.П. Смолохозяйство к.13 Насосы №3,4", []),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "График включения насосов",
            basePath: 'http://Techsite3/kaskad/graphics/Smola_k13/',
            suffix: "_Nasos_3_4.jpg"
          },
        ]
      ),
    ],
  },
  "Корп. 9а": {
    sections: [
      createSection("У.П. к.9а Печь кипящего слоя", [
        createObject(undefined, [
          {
            label: "Текущие параметры",
            path: "http://Techsite3/kaskad/Web_Clnt.dll/ShowPage?production/ugolProduction/korp9a/currentParam-korp9a.htm"
          },
        ]),
      ]),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "График температуры в топке",
            basePath: 'http://Techsite3/kaskad/graphics/korp9a/PechKS/Temperatyra/',
            suffix: '_TempPechKS_topka.jpg'
          },
          {
            label: "Графики температур в секциях",
            basePath: 'http://Techsite3/kaskad/graphics/korp9a/PechKS/Temperatyra/',
            suffix: '_TempPechKS_zona.jpg'
          },
          {
            label: "График расхода газа",
            basePath: 'http://Techsite3/kaskad/graphics/korp9a/PechKS/Rashod/',
            suffix: '_PechKSrachod_gaz.jpg'
          },
          {
            label: "График расхода воздуха",
            basePath: 'http://Techsite3/kaskad/graphics/korp9a/PechKS/Rashod/',
            suffix: '_PechKSrachod_vozduh.jpg'
          },
        ]
      ),
    ],
  },
  "Расход пара": {
    sections: [
      createSection("Угольное производство", [
        createObject(undefined, [
          {
            label: "Текущие параметры",
            path: "http://techsite5/kaskad/Web_Clnt.dll/ShowPage?production/ugolProduction/rashodPar/currentParam-rashodPar.htm"
          },
        ]),
      ]),
      createGraphsWithDateSection(
        undefined,
        dayjs(),
        [
          {
            label: "Графики давления",
            basePath: 'http://Techsite5/kaskad/graphics/UPpar/davlPar/',
            suffix: "_UP_davlPar.jpg"
          },
        ]
      ),
    ],
  },
};
