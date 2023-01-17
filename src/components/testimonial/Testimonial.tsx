import styles from './Testimonial.module.css';

type TestimonialProps = {
  profileImage: string;
  personName: string;
  reference: string;
  description: string;
  orderReversed: boolean;
};

const Testimonial = ({
  profileImage,
  personName,
  reference,
  description,
  orderReversed,
}: TestimonialProps) => (
  <div className={styles.container}>
    <img
      className={styles.profileImg}
      src={profileImage}
      alt={`Testimonial by ${personName}`}
      style={{
        order: orderReversed ? 1 : 2,
      }}
    />
    <div
      className={styles.speechBubble}
      style={{
        order: orderReversed ? 2 : 1,
      }}
    >
      <p className={styles.description}>{description}</p>
      <div>
        <span className={styles.name}>{personName}</span> /{' '}
        <span className={styles.reference}>{reference}</span>
      </div>
    </div>
  </div>
);

export default Testimonial;
