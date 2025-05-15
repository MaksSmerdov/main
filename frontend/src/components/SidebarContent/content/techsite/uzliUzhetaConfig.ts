import {SideBarContentData} from "../../../../types/sideBar.ts";
import {createGraphsWithDateSection} from "../../../../utils/utils.tsx";
import dayjs from "dayjs";

export const uzliUchetaConfig: Record<string, SideBarContentData> = {
  "Отчеты по энергоресурсам": {
    sections: [
      createGraphsWithDateSection(
        'Итоговые отчеты по теплоэнергоресурсам',
        dayjs(),
        [
          {
            title: 'Энергоресурсы',
            configs: [
              {
                label: "Суточный отчет",
                basePath: 'http://TechSite5/kaskad/Reports/sorbent/Day/uzli_ucheta/uzli_ucheta_',
                suffix: ".htm"
              },
              {
                label: "Месячный отчет",
                monthly: true,
                basePath: 'http://TechSite5/kaskad/Reports/sorbent/Month/uzli_ucheta/uzli_ucheta_',
                suffix: ".htm"
              }
            ]
          },
          {
            title: 'Установки ОВ к.317',
            configs: [
              {
                label: "Текущие параметры",
                basePath: 'http://techsite3/kaskad/Web_Clnt.dll/ShowPage?production/uzliUcheta/energyReports/currentParam-energyReports.htm',
              },
              {
                label: "Суточный отчет",
                basePath: 'http://TechSite5/kaskad/Reports/sorbent/Month/uzli_ucheta_utvh/uzli_ucheta_utvh_',
                suffix: ".htm"
              }
            ]
          },
          {
            title: 'Итоговые отчеты по электроэнергии',
            configs: [
              {
                label: "Текущий месяц",
                basePath: 'http://TechSite3/kaskad/Reports/Electric/2025/askue_tomonth.htm',
              },
              {
                label: "Выбранный месяц",
                electric: true,
                basePath: 'http://TechSite3/kaskad/Reports/Electric/2025/askue_month_',
                suffix: ".htm"
              }
            ]
          }
        ]
      ),
    ],
  },
}