import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { ProductContext } from '../contexts/ProductContext'
import ModalLocation from './ModalLocation'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: ${props => props.bg};
  z-index: 2;
  position: fixed;
  width: 100vw;
  top: 0;

  & > .modal-button {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.outline};
    padding: 16px;
  }

  & > .product-toggle.show {
    display: flex;
    justify-content: center;
    margin: 8px 0;
    padding: 0 8px;
    visibility: visible;
    height: initial;
  }

  & > .product-toggle {
    visibility: hidden;
    height: 0;
  }
`

const ButtonProductWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  border: 1px solid ${props => props.outline};
  border-radius: 10px;
`

const ButtonProductType = styled.button`
  border: none;
  color: ${props => props.subText};
  background-color: ${props => props.bg};
  flex-grow: 1;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`

const ProductToggle = () => {
  const [color, toggleColor] = useState(true)
  const theme = useContext(ThemeContext)
  const { toggleMenu } = useContext(ProductContext)

  const handleToggleColor = (e) => {
    toggleColor(e)
    toggleMenu(e)
  }

  return (
    <ButtonProductWrapper outline={theme.outline}>
      <ButtonProductType 
        subText={color ? theme.bg : theme.subText}
        bg={color ? theme.text : theme.bg}
        onClick={() => handleToggleColor(true)}
      >
        Lunch
      </ButtonProductType>
      <ButtonProductType 
        subText={color ? theme.subText : theme.bg}
        bg={color ? theme.bg : theme.text}
        onClick={() => handleToggleColor(false)}
      >
        Dinner
      </ButtonProductType>
    </ButtonProductWrapper>
  )
}

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
    <Nav bg={theme.bg} outline={theme.outline}>
      <div className='modal-button'>
        <i className='material-icons' style={{color: theme.text}}>arrow_back</i>
        <ModalLocation />
      </div> 
      <div className={`product-toggle ${useHandleScroll() ? 'show': ''}`}>
        <ProductToggle />
      </div>
    </Nav>
  )
}

export default TopNav