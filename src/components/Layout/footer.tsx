
import logo from '@/images/logo.png'
import { css } from '@emotion/react'
const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
const footerStyle = {
  footer: css({
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '40px',
    justifyContent: 'center',
    backgroundColor: 'var(--primary)',    
    color: 'white',    
    [mq[1]]: {
      flexDirection: 'column'
    }, 
    img: {
      maxHeight: '20px',
      minHeight: '20px',
      minWidth: '20px',
      maxWidth: '20px',
      [mq[1]]: {
        maxHeight: '50px',
        minHeight: '50px',
        minWidth: '50px',
        maxWidth: '50px',
      },   
    },   
    p:{
      marginLeft: '5px',
      fontWeight: '500',
      fontSize: '15px',
      [mq[1]]: {
        marginLeft: '0px',
        marginTop: '5px',
        textAlign: 'center'
      },   
    }
  }),
}

const Footer = () => {
  return (
    <div css={footerStyle.footer}>
      <img src={logo} alt="" /> 
      <p>Copyright © 2023. All rights reserved ❤ powered by William Lourensius</p>      
    </div>
  );
};

export default Footer;