import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faServer,
  faPeopleGroup,
  faCloud,
  faGuitar,
} from '@fortawesome/free-solid-svg-icons';

type CardInfo = {
  icon: IconProp;
  title: string;
  description: string;
};

export const cardsInfo: CardInfo[] = [
  {
    icon: faHtml5,
    title: 'Frontend',
    description:
      'React + Typescript are my favourite ingredients to bake a web-app. If needed, I like season with Zustand',
  },
  {
    icon: faServer,
    title: 'Backend',
    description: 'HTML, CSS, JavaScript | React | React Native | UI/UX',
  },
  {
    icon: faPeopleGroup,
    title: 'Team work',
    description: 'HTML, CSS, JavaScript | React | React Native | UI/UX',
  },
  {
    icon: faCloud,
    title: 'Cloud',
    description: 'HTML, CSS, JavaScript | React | React Native | UI/UX',
  },
  {
    icon: faYoutube,
    title: 'Youtube Creator',
    description: 'HTML, CSS, JavaScript | React | React Native | UI/UX',
  },
  {
    icon: faGuitar,
    title: 'Music',
    description: 'I an unprofessional guitarist & vocalist 😉',
  },
];
