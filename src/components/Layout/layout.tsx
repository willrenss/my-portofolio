import { Navbar, Footer } from '..';
export interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props:LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout