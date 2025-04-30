import {SideBarContentData} from "../../../../types/sideBar.ts";
import {createObject, createSection} from "../../../../utils/utils.ts";

export const saimConfig: Record<string, SideBarContentData> = {
  "Инструкции": {
    sections: [
      createSection("Инструкции производства", [
        createObject("Инструкции САиМ", [
          {label: "Текстовые инструкции", path: "/instruction"},
          {label: "Видео-инструкции", path: "http://169.254.0.156:3002/sushilka/1/mnemo"},
        ]),
        createObject("Инструкции СИЗОД", [
          {label: "Текстовые инструкции", path: "http://169.254.0.156:3002/sushilka/1/current"},
          {label: "Видео-инструкции", path: "http://169.254.0.156:3002/sushilka/1/mnemo"},
        ]),
        createObject("Инструкции УТВХ", [
          {label: "Текстовые инструкции", path: "http://169.254.0.156:3002/sushilka/1/current"},
          {label: "Видео-инструкции", path: "http://169.254.0.156:3002/sushilka/1/mnemo"},
        ]),
      ]),
    ],
  },
}