import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuButton.module.css';

type MenuButtonProps = {
  color: string;
  iconSize: string;
  onClick: () => void;
};

const MenuButton = ({ color, iconSize, onClick }: MenuButtonProps) => (
  <button className={styles.verticalMenuToggleBtn} onClick={onClick}>
    <FontAwesomeIcon
      icon={faBars}
      style={{
        color,
        fontSize: iconSize,
      }}
    />
  </button>
);

export default MenuButton;
