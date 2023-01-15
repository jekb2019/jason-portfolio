import styles from './HeaderTitle.module.css';
import logo from '../../../assets/images/logo.png';

type HeaderTitleProps = {
  title: string;
};

const HeaderTitle = ({ title }: HeaderTitleProps) => (
  <div className={styles.titleContainer}>
    <img className={styles.logo} src={logo} alt="Jason logo" />
    <span className={styles.title}>{title}</span>
  </div>
);

export default HeaderTitle;
