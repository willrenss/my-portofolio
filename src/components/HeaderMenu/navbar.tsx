import { Link } from 'react-router-dom';
import logo from '@/images/logo.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link  to="/">        
        <div className='flex ml-10'>
          
            <img src={logo} alt="" />
            <p>Willou</p>
        
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contacs">Contacts</Link>
        </li>
      </ul>
      <div className='mr-10'>
         <Link to="/myblog">
           <button className='primary-filled-btn plr-40'>My Blog</button>
         </Link>
      </div>
    </div>
  );
};

export default Navbar;