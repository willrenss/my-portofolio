import { ReactNode } from 'react';
import Navbar from './HeaderMenu/navbar';


const Layout = ({children} : { children: ReactNode })  => {
  return (
   <div>
    <Navbar/> 
    <main>{children}</main>
   </div>
  );
};

export default Layout