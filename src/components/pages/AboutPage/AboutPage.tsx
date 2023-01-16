import styles from './AboutPage.module.css';

import Carousel from '../../carousel/Carousel/Carousel';
import History from '../../history/History/History';

const AboutPage = () => (
  <section className={styles.page}>
    <h2 className={styles.title}>About Me</h2>
    <p className={styles.description}>
      I am an active coder. I am always eager to learn, and I feel most rewarded
      when my efforts and dedication lead to an outcome with satisfying results.
      I continuously look for opportunities to help and learn as a team,
      eventually reaching an innovation from the contributions we, as a team,
      make.
    </p>
    <Carousel />
    <History />
  </section>
);

export default AboutPage;
