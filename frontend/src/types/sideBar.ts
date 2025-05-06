import {Dayjs} from "dayjs";

export interface LinkItem {
  label: string;
  path: string;
}

export interface GraphConfig {
  label: string;
  basePath: string;
  suffix: string;
}

export interface DatePickerSection {
  pickerLabel: string;
  initialDate: Dayjs | null;
  configs: GraphConfig[];
}

export interface ObjectItem {
  title?: string;
  links?: LinkItem[];
  datePicker?: DatePickerSection;
}

export interface SideBarContentSection {
  header?: string;
  objects: ObjectItem[];
}

export interface SideBarContentData {
  sections: SideBarContentSection[];
}