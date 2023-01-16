import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';

type FooterProps = {
  email: string;
};

const Footer = ({ email }: FooterProps) => (
  <footer className={styles.footer}>
    <h3 className={styles.title}>Let's Talk</h3>
    <p className={styles.email}>{email}</p>
    <div className={styles.contactLinks}>
      <a
        href="https://github.com/jekb2019"
        target="blank"
        className={styles.btn}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/jason-ko-4197521a3/"
        className={styles.btn}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto: jekb2019@gmail.com" className={styles.btn}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  </footer>
);

export default Footer;
