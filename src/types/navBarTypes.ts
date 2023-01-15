export type ListItemOption = {
  label: string;
  onClick: () => void;
};

export type BaseNavBar = {
  menuOptions: ListItemOption[];
};
