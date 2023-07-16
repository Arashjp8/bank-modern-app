import { quotes } from "../assets";
import styles from "../style";

interface Props {
  fb: { id: string; content: string; name: string; title: string; img: string };
}

const FeedbackCard = ({ fb }: Props) => {
  return (
    <div
      className={`w-[370px] h-[395px] flex flex-col flex-wrap items-start hover:bg-dimWhite feature-card rounded-xl`}
    >
      <div className={`${styles.paddingY} pl-9`}>
        <div>
          <img
            src={quotes}
            alt="quotes"
            className="w-[43px] h-[28px] object-contain"
          />
        </div>
        <div>
          <p
            className={`${styles.paragraph} font-semibold max-w-[300px] mt-10`}
          >
            {fb.content}
          </p>
        </div>
        <div className="mt-10 flex flex-row">
          <img src={fb.img} alt="people01" className="w-[48px] h-[48px]" />
          <span className="ml-5">
            <h4
              className={`font-poppins font-semibold  text-white xs:leading-[32px] leading-[20px] w-full sm:text-[26px] text-[20px]`}
            >
              {fb.name}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px]">
              {fb.title}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
