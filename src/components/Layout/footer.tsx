
import logo from '@/images/logo.png'

const Footer = () => {
  return (
    <div className='footer txt-white'>
      <p className='fw-500 fz-20'>Copyright ©2023</p>
      <div className='fullCenter-flex mt-5'>
        <img src={logo} alt="" />
        <p className='fz-11 fw-500 ml-5'>Willrens</p>
      </div>
    </div>
  );
};

export default Footer;