import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HistoryItem.module.css';

type HistoryItemProps = {
  logo: string;
  organization: string;
  roleTitle: string;
  url: string;
  displayedUrl: string;
  period: string;
  workingType: string;
  description: string;
  skills?: string[];
  technologies?: string[];
};

const HistoryItem = ({
  logo,
  organization,
  roleTitle,
  url,
  displayedUrl,
  period,
  workingType,
  description,
  skills,
  technologies,
}: HistoryItemProps) => (
  <div className={styles.historyItem}>
    <div className={styles.imgWrapper}>
      <img src={logo} alt={`${organization} logo`} />
    </div>
    <div className={styles.infoWrapper}>
      <b className={styles.roleTitle}>{roleTitle}</b>
      <div className={styles.organizationDetails}>
        <p className={styles.organization}>{organization}</p>
        <a className={styles.url} href={url} target="_blank">
          <FontAwesomeIcon icon={faLink} className={styles.linkIcon} />{' '}
          {displayedUrl}
        </a>
      </div>
      <p className={styles.period}>{`${period} · ${workingType}`}</p>
      <hr className={styles.dividor} />
      <p className={styles.description}>{description}</p>
      {technologies && (
        <p className={styles.listing}>
          <b className={styles.bold}>Technologies:</b>{' '}
          {technologies.join(' · ')}
        </p>
      )}
      {skills && (
        <p className={styles.listing}>
          <b className={styles.bold}>Skills:</b> {skills.join(' · ')}
        </p>
      )}
    </div>
  </div>
);

export default HistoryItem;
