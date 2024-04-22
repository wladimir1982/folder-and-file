export interface Item {
  name: string;
  mime?: string;
  type: string;
  children?: Item[];
}

export interface FileProps {
  name: string;
  mime: string;
}

export interface FolderProps {
  name: string;
  childrenProps: Item[];
  expandedFolders?: string[];
}

export interface MyBrowserProps {
  data: Item[];
  expandedFolders: string[];
}
