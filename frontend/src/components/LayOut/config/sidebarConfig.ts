import {carbonFurnacesConfig} from "./sidebarCarbonConfig.ts";
import {SideBarContentData} from "../../../types/sideBar.ts";
import {ugolProductionConfig} from "./sidebarUgolProdConfig.ts";

export const sidebarMainConfig: Record<string, Record<string, SideBarContentData>> = {
  "Карбон": carbonFurnacesConfig,
  "Угольное производство": ugolProductionConfig
};

