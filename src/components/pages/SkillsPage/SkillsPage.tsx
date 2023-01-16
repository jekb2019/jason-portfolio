import SkillsGrid from '../../skills/SkillsGrid/SkillsGrid';
import styles from './SkillsPage.module.css';

const SkillsPage = () => (
  <section className={styles.page}>
    <h2 className={styles.title}>Skills</h2>
    <h3 className={styles.subTitle}>Skills & Attributes</h3>
    <p className={styles.description}>
      I want to be a T-shaped person. A person who is both professional and able
      to collaborate across disciplines.
    </p>
    <SkillsGrid />
  </section>
);

export default SkillsPage;
