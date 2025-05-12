import {carbonFurnacesConfig} from "./techsite/sidebarCarbonConfig.ts";
import {SideBarContentData} from "../../../types/sideBar.ts";
import {ugolProductionConfig} from "./techsite/sidebarUgolProdConfig.ts";
import {saimConfig} from "./library/sidebarLibraryConfig.ts";
import {utvhConfig} from "./techsite/sidebarUtvhConfig.ts";

export const sidebarMainConfig: Record<string, Record<string, SideBarContentData>> = {
  "Карбон": carbonFurnacesConfig,
  "Угольное производство": ugolProductionConfig,
  'УТВХ': utvhConfig,
};

export const sidebarLibraryConfig: Record<string, Record<string, SideBarContentData>> = {
  'САиМ': saimConfig
};