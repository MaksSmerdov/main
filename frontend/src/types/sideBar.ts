import {Dayjs} from "dayjs";

export interface LinkItem {
  label: string;
  path: string;
}

export interface GraphConfig {
  label: string;
  basePath: string;
  suffix?: string;
  monthly?: boolean;
  electric?: boolean;
}

// title теперь необязателен
export interface DatePickerGroup {
  title?: string;
  configs: GraphConfig[];
}

export interface DatePickerSection {
  pickerLabel: string;
  initialDate: Dayjs | null;
  groups: DatePickerGroup[];
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
