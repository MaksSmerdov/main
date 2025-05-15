import {carbonConfig} from "./techsite/сarbonConfig.ts";
import {ugolProductionConfig} from "./techsite/ugolProdConfig.ts";
import {utvhConfig} from "./techsite/utvhConfig.ts";
import {uzliUchetaConfig} from "./techsite/uzliUzhetaConfig.ts";
import {saimConfig} from "./library/sidebarLibraryConfig.ts";
import {SideBarContentData} from "../../../types/sideBar.ts";

export const sidebarMainConfig: Record<string, Record<string, SideBarContentData>> = {
  "Карбон": carbonConfig,
  "Угольное производство": ugolProductionConfig,
  'Узлы учета': uzliUchetaConfig,
  'УТВХ': utvhConfig,
};

export const sidebarLibraryConfig: Record<string, Record<string, SideBarContentData>> = {
  'САиМ': saimConfig
};