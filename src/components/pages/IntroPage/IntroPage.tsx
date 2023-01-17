import styles from './IntroPage.module.css';
import profile from '../../../assets/images/profile.png';
import BorderButton from '../../common/BorderButton/BorderButton';
import { scrollToBottom } from '../../../service/scroll/scroll';

const IntroPage = () => (
  <section className={styles.page}>
    <img className={styles.profile} src={profile} alt="Jason's profile" />
    <h1 className={styles.title}>
      Hello,
      <br /> I'm a Developer
    </h1>
    <p className={styles.description}>
      A Full-time Software Developer Based in Auckland, New Zealand
    </p>
    <BorderButton
      color="white"
      padding="8px 12px"
      fontSize="1.1rem"
      onClick={() => {
        scrollToBottom();
      }}
    >
      Contact Me
    </BorderButton>
  </section>
);

export default IntroPage;
