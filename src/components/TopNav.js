import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import ModalLocation from './ModalLocation'
import ProductToggle from './ProductToggle'
import Calendar from './Calendar'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: ${props => props.bg};
  z-index: 2;
  position: fixed;
  width: 100vw;
  top: 0;

  & .modal-button {
    display: flex;
    align-items: center;
    padding: 16px 8px;
  }

  & .product-toggle.show {
    display: flex;
    justify-content: center;
    margin: 8px 0;
    padding: 0 8px;
    display: block;
  }

  & .product-toggle {
    display: none;
  }
`

const TopNav = () =>  {
  const theme = useContext(ThemeContext)
  const useHandleScroll = () => {
    const [scrollPos, setScrollPos] = useState(0)
    const [hideButton, setHideButton] = useState(true)

    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top)
      setHideButton(document.body.getBoundingClientRect().top > scrollPos)
    }
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return (
        window.addEventListener('scroll', handleScroll)
      )
    })

    return hideButton
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
      <div className={`product-toggle ${useHandleScroll() ? 'show': ''}`}>
        <ProductToggle />
      </div>
    </Nav>
  )
}

export default TopNav