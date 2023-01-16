import styles from './History.module.css';
import { experience } from '../../../data/experience';
import HistoryItem from '../ExperienceItem/ExperienceItem';
import { certificates, education } from '../../../data/education';
import EducationItem from '../EducationItem/EducationItem';

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
      <EducationItem
        key={idx}
        institution={item.institution}
        logo={item.logoImg}
        major={item.major}
        periods={item.periods}
      />
    ))}
    <h3 className={styles.sectionTitle}>Certificates</h3>
    {certificates.map((item, idx) => (
      <EducationItem
        key={idx}
        institution={item.institution}
        logo={item.logoImg}
        major={item.major}
        periods={item.periods}
      />
    ))}
  </article>
);

export default History;
