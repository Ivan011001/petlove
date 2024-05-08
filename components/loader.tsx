import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <Hearts
      height="80"
      width="80"
      color="#F6B83D"
      ariaLabel="hearts-loading"
      visible={true}
    />
  );
};

export default Loader;
