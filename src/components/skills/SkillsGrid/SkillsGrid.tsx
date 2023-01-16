import { others, tools } from '../../../data/skills';
import GridContent from '../GridContent/GridContent';
import styles from './SkillsGrid.module.css';

const SkillsGrid = () => (
  <article className={styles.grid}>
    <div className={styles.left}>
      <GridContent label="Top Skills" backgroundColor="#4d4d4d">
        <div></div>
      </GridContent>
    </div>
    <div className={styles.right}>
      <GridContent label="Tools" backgroundColor="#616161">
        <ul className={styles.list}>
          {tools.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </GridContent>
      <GridContent label="Others" backgroundColor="#7c7979">
        <ul className={styles.list}>
          {others.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </GridContent>
    </div>
  </article>
);

export default SkillsGrid;
