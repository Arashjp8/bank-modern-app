import styles, { layout } from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${layout.section} feature-card rounded-2xl px-20 mt-20`}
    >
      <div
        className={`flex-1 ${styles.flexStart} md:flex-row flex-col justify-between`}
      >
        <span>
          <h2 className={styles.heading2}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[460px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </span>
        <Button styles="mt-10" />
      </div>
    </section>
  );
};

export default CTA;
