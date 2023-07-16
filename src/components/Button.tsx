interface Props {
  styles?: string;
}

const Button = ({ styles }: Props) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg hover:opacity-70 transition duration-300 ease-in-out ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
