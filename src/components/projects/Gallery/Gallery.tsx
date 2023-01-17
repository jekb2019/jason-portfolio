import { Project } from '../../../data/projects';
import styles from './Gallery.module.css';

type GalleryProps = {
  projects: Project[];
};

const Gallery = ({ projects }: GalleryProps) => (
  <div className={styles.container}>
    {projects.map((item, idx) => (
      <div key={idx} className={styles.item}>
        <div className={styles.preview}>
          <p className={styles.title}>{item.name}</p>
          <hr className={styles.dividor} />
          <p className={styles.description}>{item.description}</p>
        </div>
        <img src={item.image} alt="Project" />
      </div>
    ))}
  </div>
);

export default Gallery;
