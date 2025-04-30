import {carbonFurnacesConfig} from "./techsite/sidebarCarbonConfig.ts";
import {SideBarContentData} from "../../../types/sideBar.ts";
import {ugolProductionConfig} from "./techsite/sidebarUgolProdConfig.ts";
import {saimConfig} from "./library/sidebarLibraryConfig.ts";

export const sidebarMainConfig: Record<string, Record<string, SideBarContentData>> = {
  "Карбон": carbonFurnacesConfig,
  "Угольное производство": ugolProductionConfig
};

export const sidebarLibraryConfig: Record<string, Record<string, SideBarContentData>> = {
  'САиМ': saimConfig
};