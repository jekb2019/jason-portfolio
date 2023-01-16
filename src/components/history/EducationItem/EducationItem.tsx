import styles from './EducationItem.module.css';

type EducationItemProps = {
  logo: string;
  institution: string;
  periods: string[];
  major: string;
};

const EducationItem = ({
  institution,
  logo,
  major,
  periods,
}: EducationItemProps) => (
  <div className={styles.historyItem}>
    <div className={styles.imgWrapper}>
      <img src={logo} alt={`${institution} logo`} />
    </div>
    <div className={styles.infoWrapper}>
      <b className={styles.title}>{institution}</b>
      <p className={styles.major}>{major}</p>
      {periods.map((period, idx) => (
        <p key={idx} className={styles.period}>
          {period}
        </p>
      ))}
    </div>
  </div>
);

export default EducationItem;
