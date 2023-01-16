import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Direction } from '../Carousel/Carousel';
import styles from './CarouselButton.module.css';

type CarouselButtonProps = {
  onClick: (direction: Direction) => void;
  icon: IconProp;
  direction: Direction;
};

const CarouselButton = ({ onClick, icon, direction }: CarouselButtonProps) => (
  <button
    className={`${styles.transitioner} ${styles[direction]}`}
    onClick={() => onClick(direction)}
  >
    <FontAwesomeIcon className={styles.transitionIcon} icon={icon} />
  </button>
);

export default CarouselButton;
