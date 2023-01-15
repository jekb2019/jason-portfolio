import { ReactNode } from 'react';
import styles from './BorderButton.module.css';

type BorderButtonProps = {
  children: ReactNode;
  color: string;
  padding: string;
  fontSize: string;
  onClick: () => void;
};

const BorderButton = ({
  children,
  color,
  padding,
  fontSize,
  onClick,
}: BorderButtonProps) => (
  <button
    className={styles.button}
    style={{
      borderColor: color,
      color,
      padding,
      fontSize,
    }}
  >
    {children}
  </button>
);

export default BorderButton;
