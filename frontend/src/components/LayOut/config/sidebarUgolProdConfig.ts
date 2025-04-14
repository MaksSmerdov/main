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
};
