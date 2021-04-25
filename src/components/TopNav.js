import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import ModalLocation from './ModalLocation'
import ProductToggle from './ProductToggle'
import Calendar from './Calendar'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: ${props => props.bg};
  z-index: 2;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;

  & .modal-button {
    display: flex;
    align-items: center;
    padding: 16px 8px;
  }

  & .product-toggle {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    padding: 0 8px 8px 8px;
  }

  & .product-toggle.hide {
    display: none;
  }
`

const TopNav = () =>  {
  const theme = useContext(ThemeContext)

  const HandleHideOnScroll = () => {
    const [hide, setHide] = useState(true);
    let prevScrollpos;
  
    const handleScroll = () => {
      const currentScrollpos = window.pageYOffset;
      if (prevScrollpos === undefined) {
        prevScrollpos = window.pageYOffset;
      }
      if (currentScrollpos > prevScrollpos) {
        setHide(false);
        prevScrollpos = currentScrollpos;
      } else if (currentScrollpos < prevScrollpos) {
        setHide(true);
        prevScrollpos = currentScrollpos;
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });

    return hide
  }

  return (
    <Nav bg={theme.bg}>
      <div style={{borderBottom: `1px solid ${theme.outline}`}}>
        <div className='modal-button'>
          <i className='material-icons' style={{color: theme.text, fontSize: '1.75rem'}}>arrow_back</i>
          <ModalLocation />
        </div>
        <Calendar />
      </div>
      <div className={`product-toggle ${HandleHideOnScroll() ? '' : 'hide'}`}>
        <ProductToggle />
      </div>
    </Nav>
  )
}

export default TopNav