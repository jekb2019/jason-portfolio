import { ReactNode } from 'react';
import styles from './ListItem.module.css';

export type ListItemOption = {
  label: string;
  onClick: () => void;
};

type ListItemProps = {
  children: ReactNode;
  onClick: () => void;
};

const ListItem = ({ children, onClick }: ListItemProps) => {
  return (
    <li className={styles.item} onClick={onClick}>
      <a href="/#" className={styles.label}>
        {children}
      </a>
    </li>
  );
};

export default ListItem;