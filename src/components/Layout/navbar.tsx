// import { Link } from 'react-router-dom';
import logo from '@/images/logo.png'

const Navbar = () => {
  const [isActive, setIsActive] = useState('');
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      // Adjusting for the navbar height
      const navbar = document.querySelector('.navbar') as HTMLElement | null;
      if (navbar) {
        // Adjusting for the navbar height
        const navbarHeight = navbar?.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const  offset = elementPosition - navbarHeight;

        window.scrollBy({ top: offset, behavior: 'smooth' });
      }
      setIsActive(elementId);
    }
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div id='navbar' className={`navbar ${isMenuOpen ? 'ht-100-max' : ''}`}>
      <Link to="/">
        <div onClick={() => {
          scrollToElement('top');
        }} className='flex ml-10'>
          <img src={logo} alt="" />
          <p>Willrens</p>
        </div>
      </Link>
      <div className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar1" />
        <div className="bar mt-5" />
        <div className="bar mt-5" />
      </div>
      <ul className={`menu ${isMenuOpen ? 'open animation-slide' : ''}`}>
        <li className={`menu isClickAble animation-child 
          ${isMenuOpen ? 'open animation-slide' : ''}  
          ${isActive === 'about' ? 'txt-secondaryS' : 'txt-default'} `}
          onClick={() => {
            scrollToElement('about');
          }}>
          About
        </li>
        <li className={`menu isClickAble animation-child 
          ${isMenuOpen ? 'open animation-slide' : ''}  
          ${isActive === 'skill' ? 'txt-secondaryS' : 'txt-default'} `}
          onClick={() => {
            scrollToElement('skill');
          }}>
          Skills
        </li>
        {/* <li className={`menu isClickAble animation-child 
          ${isMenuOpen ? 'open animation-slide' : ''}  
          ${isActive === 'project' ? 'txt-secondaryS' : 'txt-default'} `}
          onClick={() => {
            scrollToElement('project');
          }}>
          Projects
        </li> */}
        <li className={`menu isClickAble animation-child 
          ${isMenuOpen ? 'open animation-slide' : ''}  
          ${isActive === 'contact' ? 'txt-secondaryS' : 'txt-default'} `}
          onClick={() => {
            scrollToElement('contact');
          }}>
          Contacts
        </li>
      </ul>
      <div className={`menu mr-10 ${isMenuOpen ? 'open animation-slide ptb-10' : ''}`}>
        <Link to="/myblog">
          <button
            onClick={() => {
              scrollToElement('top');
            }}
           className='primary-filled-btn plr-40 animation-child'>My Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;