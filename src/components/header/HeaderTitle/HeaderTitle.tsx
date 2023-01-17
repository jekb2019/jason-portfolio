import styles from './HeaderTitle.module.css';
import logo from '../../../assets/images/logo.png';
import { scrollToTop } from '../../../service/scroll/scroll';

type HeaderTitleProps = {
  title: string;
};

const HeaderTitle = ({ title }: HeaderTitleProps) => (
  <div className={styles.titleContainer} onClick={scrollToTop}>
    <img className={styles.logo} src={logo} alt="Jason logo" />
    <span className={styles.title}>{title}</span>
  </div>
);

export default HeaderTitle;
