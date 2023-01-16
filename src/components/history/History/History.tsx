import styles from './History.module.css';
import { experience } from '../../../data/experience';
import HistoryItem from '../HistoryItem/HistoryItem';
import { education } from '../../../data/education';

const History = () => (
  <article className={styles.history}>
    <h3 className={styles.sectionTitle}>Experience</h3>
    {experience.map((item, idx) => (
      <HistoryItem
        key={idx}
        logo={item.logoImg}
        organization={item.organization}
        roleTitle={item.roleTitle}
        url={item.url}
        displayedUrl={item.displayedUrl}
        period={item.period}
        workingType={item.workingType}
        description={item.description}
        skills={item.skills}
        technologies={item.technologies}
      />
    ))}
    <h3 className={styles.sectionTitle}>Education</h3>
    {education.map((item, idx) => (
      <></>
      // <HistoryItem
      //   key={idx}
      //   logo={item.logoImg}
      //   institution={item.institution}
      // />
    ))}
  </article>
);

export default History;
