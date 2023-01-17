import { useMemo, useRef, useState } from 'react';
import GalleryButton from '../../common/GalleryButton/GalleryButton';
import styles from './ProjectGallery.module.css';
import { service, tutorials } from '../../../data/projects';
import Gallery from '../Gallery/Gallery';
import { capitalizeFirstLetter } from '../../../utils/general';

type ViewType = 'all' | 'service' | 'tutorials';

const views: ViewType[] = ['all', 'service', 'tutorials'];

const getProjectData = (viewType: ViewType) => {
  switch (viewType) {
    case 'all':
      return [...service, ...tutorials];
    case 'service':
      return [...service];
    case 'tutorials':
      return [...tutorials];
    default:
      throw new Error(`Unkown view type ${viewType}`);
  }
};

const makeGalleryInvisible = (element: HTMLDivElement) => {
  element.style.transform = 'translateY(30px)';
  element.style.scale = '0.9';
  element.style.opacity = '0';
};

const makeGalleryVisible = (element: HTMLDivElement) => {
  element.style.transform = '';
  element.style.scale = '';
  element.style.opacity = '';
};

const ProjectGallery = () => {
  const [view, setView] = useState<ViewType>('all');
  const galleryRef = useRef<HTMLDivElement>(null);
  const projectData = useMemo(() => getProjectData(view), [view]);

  return (
    <article className={styles.gallery}>
      <div className={styles.buttons}>
        {views.map((viewName, idx) => (
          <GalleryButton
            key={idx}
            active={view === viewName}
            number={getProjectData(viewName).length}
            onClick={() => {
              makeGalleryInvisible(galleryRef.current as HTMLDivElement);
              setTimeout(() => {
                setView(viewName);
                makeGalleryVisible(galleryRef.current as HTMLDivElement);
              }, 300);
            }}
          >
            {capitalizeFirstLetter(viewName)}
          </GalleryButton>
        ))}
      </div>
      <div ref={galleryRef} className={styles.galleryContainer}>
        <Gallery projects={projectData} />
      </div>
    </article>
  );
};

export default ProjectGallery;
