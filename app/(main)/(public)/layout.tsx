const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="container flex flex-col">{children}</section>;
};

export default PublicLayout;
