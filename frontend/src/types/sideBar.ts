export interface LinkItem {
  label: string;
  path: string;
}

export interface ObjectItem {
  title?: string;
  links: LinkItem[];
}

export interface SideBarContentSection {
  header?: string;
  objects: ObjectItem[];
}

export interface SideBarContentData {
  sections: SideBarContentSection[];
}