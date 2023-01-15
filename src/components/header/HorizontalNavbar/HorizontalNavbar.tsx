import { BaseNavBar } from '../../../types/navBarTypes';
import ListItem from '../ListItem/ListItem';
import styles from './HorizontalNavbar.module.css';

type HorizontalNavbarProps = BaseNavBar;

const HorizontalNavbar = ({ menuOptions }: HorizontalNavbarProps) => (
  <nav className={styles.horizontalMenuContainer}>
    <ul>
      {menuOptions.map((option, idx) => (
        <ListItem key={idx} onClick={option.onClick}>
          {option.label}
        </ListItem>
      ))}
    </ul>
  </nav>
);

export default HorizontalNavbar;
