import {SideBarContentSection, ObjectItem, DatePickerGroup} from "../types/sideBar";
import dayjs, {Dayjs} from "dayjs";

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
  groups: DatePickerGroup[],
): SideBarContentSection => ({
  header,
  objects: [
    {
      datePicker: {
        pickerLabel: "Выберите дату",
        initialDate,
        groups,
      },
    },
  ],
});

export function buildUrl(
  date: Dayjs | null,
  base: string,
  suffix?: string,
  monthly?: boolean,
  electric?: boolean,
): string {

  if (electric) {
    const now = dayjs();
    const currentMonth = parseInt(now.format("M"), 10);
    const m = currentMonth - 1;
    return `${base}${m}${suffix ?? ""}`;
  }

  if (!suffix) {
    return base;
  }
  if (!date) {
    return "";
  }

  const dd = date.format("D");
  const mm = date.format("M");
  const yyyy = date.format("YYYY");

  if (monthly) {
    return `${base}_${mm}_${yyyy}${suffix}`;
  } else {
    return `${base}${dd}_${mm}_${yyyy}${suffix}`;
  }
}