import styles from './SkillScale.module.css';

type SkillScaleProps = {
  label: string;
  percentage: number;
};

const SkillScale = ({ label, percentage }: SkillScaleProps) => (
  <div className={styles.container}>
    <div className={styles.labels}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className={styles.bar}>
      <div
        className={styles.fill}
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  </div>
);

export default SkillScale;
