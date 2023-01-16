import { others, skills, tools } from '../../../data/skills';
import GridContent from '../GridContent/GridContent';
import SkillScale from '../SkillScale/SkillScale';
import styles from './SkillsGrid.module.css';

const SkillsGrid = () => (
  <article className={styles.grid}>
    <div className={styles.left}>
      <GridContent label="Top Skills" backgroundColor="#4d4d4d">
        <div className={styles.scaleWrapper}>
          {skills.map((skill, idx) => (
            <SkillScale
              key={idx}
              label={skill.name}
              percentage={skill.competence}
            />
          ))}
        </div>
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
