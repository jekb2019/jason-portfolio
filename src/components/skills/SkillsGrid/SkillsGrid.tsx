import styles from './SkillsGrid.module.css';

const SkillsGrid = () => (
  <article className={styles.grid}>
    <div className={`${styles.left} ${styles.gridContent}`}>
      <p className={styles.skillType}>Skills</p>
    </div>
    <div className={styles.right}>
      <div className={`${styles.tools} ${styles.gridContent}`}>
        <p className={styles.skillType}>Tools</p>
      </div>
      <div className={`${styles.others} ${styles.gridContent}`}>
        <p className={styles.skillType}>Etc</p>
      </div>
    </div>
  </article>
);

export default SkillsGrid;
