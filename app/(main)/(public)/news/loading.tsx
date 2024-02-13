const NewsLoading = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center left-0 top-0 absolute bg-black bg-opacity-30 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(/loading.jpg)` }}
    />
  );
};

export default NewsLoading;
