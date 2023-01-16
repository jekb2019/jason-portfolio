import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.css';

type CardDimensions = {
  width: string;
  height: string;
};

type CardProps = {
  title: string;
  description: string;
  icon: IconProp;
  dimensions: CardDimensions;
};

const Card = ({ title, description, icon, dimensions }: CardProps) => (
  <div
    className={styles.card}
    style={{
      ...dimensions,
    }}
  >
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </div>
    <b className={styles.title}>{title}</b>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Card;
