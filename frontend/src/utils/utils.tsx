import {SideBarContentSection, ObjectItem, GraphConfig} from "../types/sideBar";
import {Dayjs} from "dayjs";

export const createSection = (
  header: string | undefined,
  objects: ObjectItem[]
): SideBarContentSection => ({
  header,
  objects,
});

export const createObject = (
  title: string | undefined,
  links: { label: string; path: string }[]
): ObjectItem => ({
  title,
  links,
});


export const createGraphsWithDateSection = (
  header: string | undefined,
  initialDate: Dayjs | null,
  configs: GraphConfig[]
): SideBarContentSection => ({
  header,
  objects: [
    {
      title: undefined,
      links: undefined,
      datePicker: {initialDate, configs}
    } as ObjectItem,
  ],
});

export function buildUrl(
  date: Dayjs | null,
  base: string,
  suffix: string
): string {
  if (!date) return "";
  const dd = date.format("D");
  const mm = date.format("M");
  const yyyy = date.format("YYYY");
  return `${base}${dd}_${mm}_${yyyy}${suffix}`;
}