interface ITitleProps {
  children: string;
}

const Title = ({ children }: ITitleProps) => {
  return (
    <h2 className="text-neutral-800 text-3xl md:text-5xl font-bold leading-7 md:leading-10">
      {children}
    </h2>
  );
};

export default Title;
