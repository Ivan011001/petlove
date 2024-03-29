import PageContainer from "@/components/page-container";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container flex flex-col pb-[80px]">
      <PageContainer>{children}</PageContainer>
    </section>
  );
};

export default PublicLayout;
