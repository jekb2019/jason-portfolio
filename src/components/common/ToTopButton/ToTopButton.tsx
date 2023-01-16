import styles from './ToTopButton.module.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToTopButton = () => {
  return (
    <button className={styles.button}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ToTopButton;
