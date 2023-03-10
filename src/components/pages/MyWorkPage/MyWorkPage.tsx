import ProjectGallery from '../../projects/ProjectGallery/ProjectGallery';
import styles from './MyWorkPage.module.css';

const MyWorkPage = () => (
  <section className={styles.page}>
    <h2 className={styles.title} data-anchor="my-work-page">
      My Work
    </h2>
    <p className={styles.description}>
      I enjoy doing side projects in my spare time.
    </p>
    <ProjectGallery />
  </section>
);

export default MyWorkPage;
