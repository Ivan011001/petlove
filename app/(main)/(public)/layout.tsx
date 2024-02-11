const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container flex flex-col pb-[80px]">{children}</section>
  );
};

export default PublicLayout;
