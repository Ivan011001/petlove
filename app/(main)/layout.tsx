import HeaderWrapper from "../_components/header-wrapper";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
