import { ReactNode } from 'react';
import Navbar from './Layout/navbar';
import Footer from './Layout/footer';


const Layout = ({children} : { children: ReactNode })  => {
  return (
   <div>
    <Navbar/> 
    <main>{children}</main>
    <Footer/>
   </div>
  );
};

export default Layout