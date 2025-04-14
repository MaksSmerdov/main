import {SideBarContentSection, ObjectItem} from "../types/sideBar.ts";

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
