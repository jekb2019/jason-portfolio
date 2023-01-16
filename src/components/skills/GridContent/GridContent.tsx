import { ReactNode } from 'react';
import styles from './GridContent.module.css';

type GridContentProps = {
  children: ReactNode;
  label: string;
  backgroundColor: string;
};

const GridContent = ({
  children,
  label,
  backgroundColor,
}: GridContentProps) => (
  <div
    className={`${styles.tools} ${styles.gridContent}`}
    style={{
      backgroundColor,
    }}
  >
    <p className={styles.skillType}>{label}</p>
    <hr className={styles.dividor} />
    {children}
  </div>
);

export default GridContent;
