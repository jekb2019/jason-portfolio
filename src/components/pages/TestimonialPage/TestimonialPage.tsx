import Testimonial from '../../testimonial/Testimonial';
import styles from './TestimonialPage.module.css';
import { testimonials } from '../../../data/testimonials';

const TestimonialPage = () => (
  <section className={styles.page}>
    <h2 className={styles.title} data-anchor="testimonial-page">
      Testimonials
    </h2>
    <p className={styles.description}>See what they say about me</p>
    {testimonials.map((item, idx) => (
      <Testimonial
        key={idx}
        profileImage={item.profileImage}
        personName={item.personName}
        reference={item.reference}
        description={item.description}
        orderReversed={idx % 2 === 0}
      />
    ))}
  </section>
);

export default TestimonialPage;
