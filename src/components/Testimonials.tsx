import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className={layout.section}>
      <div className="flex flex-col flex-1">
        <div className={`flex-1 flex-col md:flex-row ${styles.flexStart}`}>
          <h2 className={styles.heading2}>
            What people are <br className="sm:block hidden" /> saying about us
          </h2>
          <p className={`${styles.paragraph} max-w-[450px] mt-10`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-between items-start mt-10`}
        >
          {feedback.map((fb) => (
            <FeedbackCard key={fb.id} fb={fb} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
