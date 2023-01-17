import { ReactNode } from 'react';
import styles from './ListItem.module.css';

type ListItemProps = {
  children: ReactNode;
  onClick: () => void;
};

const ListItem = ({ children, onClick }: ListItemProps) => {
  return (
    <li className={styles.item} onClick={onClick}>
      <span className={styles.label}>{children}</span>
    </li>
  );
};

export default ListItem;
