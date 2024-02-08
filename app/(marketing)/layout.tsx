const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="container flex flex-col py-5">{children}</main>;
};

export default HomeLayout;
