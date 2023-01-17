import JK from '../assets/images/testimonials/JK.png';
import DHL from '../assets/images/testimonials/DHL.png';

type Testimonial = {
  profileImage: string;
  personName: string;
  reference: string;
  description: string;
};

export const testimonials: Testimonial[] = [
  {
    profileImage: JK,
    personName: 'Jun Ko',
    reference: 'CS Health Care',
    description:
      'Jason made me a fantastic looking profile website for my company. It was a pleasure to work with him.',
  },
  {
    profileImage: DHL,
    personName: 'Donghyun Lee',
    reference: 'WDCC Project Manager',
    description:
      'I did multiple team projects with Jason, and he was a valuable member. He does not give up easily, bring a positive vibe to the team. He is a competent programmer who knows how to work effectively as a team.',
  },
];
