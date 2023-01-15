import { BaseNavBar } from '../../../types/navBarTypes';
import ListItem from '../ListItem/ListItem';
import styles from './VerticalNavbar.module.css';

type VerticalNavbarProps = BaseNavBar & {
  isMenuOpen: boolean;
};

const VerticalNavbar = ({ menuOptions, isMenuOpen }: VerticalNavbarProps) => (
  <nav
    className={`${styles.verticalMenuContainer} ${
      isMenuOpen ? styles.verticalMenuOpen : null
    }`}
  >
    <ul className={styles.verticalMenu}>
      {menuOptions.map((option, idx) => (
        <ListItem key={idx} onClick={option.onClick}>
          {option.label}
        </ListItem>
      ))}
    </ul>
  </nav>
);

export default VerticalNavbar;
