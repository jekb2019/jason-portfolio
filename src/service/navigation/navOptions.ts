import { ListItemOption } from '../../types/navBarTypes';
import { scrollIntoView, scrollToBottom, scrollToTop } from '../scroll/scroll';

export const menuOptions: ListItemOption[] = [
  {
    label: 'Home',
    onClick: () => scrollToTop(),
  },
  {
    label: 'About',
    onClick: () => scrollIntoView('about-page'),
  },
  {
    label: 'Skills',
    onClick: () => scrollIntoView('skills-page'),
  },
  {
    label: 'My Work',
    onClick: () => scrollIntoView('my-work-page'),
  },
  {
    label: 'Testimonial',
    onClick: () => scrollIntoView('testimonial-page'),
  },
  {
    label: 'Contact',
    onClick: () => scrollToBottom(),
  },
];
