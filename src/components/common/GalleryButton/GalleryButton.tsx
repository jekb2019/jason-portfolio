import { ReactNode } from 'react';
import styles from './GalleryButton.module.css';

type GalleryButtonProps = {
  children: ReactNode;
  active: boolean;
  number: number;
  onClick: () => void;
};

const GalleryButton = ({
  children,
  active,
  number,
  onClick,
}: GalleryButtonProps) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${active ? styles.active : null}`}
  >
    {children}
    <span className={styles.number}>{number}</span>
  </button>
);

export default GalleryButton;
