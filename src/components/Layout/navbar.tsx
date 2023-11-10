import { css } from '@emotion/react'
const navbarStyle = {
  background: css({
    backgroundColor: 'var(--primary)',   
    minHeight: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    h1: {
      margin: '0',
      color: 'var(--white)'
    }
  }),
}
const Navbar = () => (
  <div css={navbarStyle.background}>
    <h1>My Contact</h1>
  </div>
)

export default Navbar;