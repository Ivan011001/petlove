import { Hearts } from "react-loader-spinner";

const Loader = () => {
  console.log("Loader");
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
