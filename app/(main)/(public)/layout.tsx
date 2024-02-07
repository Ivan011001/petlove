const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container">
      <p>Public layout</p>
      {children}
    </main>
  );
};

export default PublicLayout;
