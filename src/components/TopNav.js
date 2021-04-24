import { useState, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
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

  & > .product-toggle {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }
`

const ButtonProductWrapper = styled.div`
  width: 100%;
  max-width: 300px;
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
  font-size: 16px;
  font-weight: 600;

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`

function ProductToggle() {
  const [menu, toggleMenu] = useState(true)
  const theme = useContext(ThemeContext)

  function handleToggleMenu(e) {
    toggleMenu(e)
  }

  return (
    <ButtonProductWrapper outline={theme.outline}>
      <ButtonProductType 
        subText={menu ? theme.bg : theme.subText}
        bg={menu ? theme.text : theme.bg}
        onClick={() => handleToggleMenu(true)}
      >
        Lunch
      </ButtonProductType>
      <ButtonProductType 
        subText={menu ? theme.subText : theme.bg}
        bg={menu ? theme.bg : theme.text}
        onClick={() => handleToggleMenu(false)}
      >
        Dinner
      </ButtonProductType>
    </ButtonProductWrapper>
  )
}

const TopNav = () =>  {
  const theme = useContext(ThemeContext)
  return (
    <Nav bg={theme.bg} outline={theme.outline}>
      <div className="modal-button">
        <i className="material-icons" style={{color: theme.text}}>arrow_back</i>
        <ModalLocation />
      </div>
      <div className="product-toggle">
        <ProductToggle />
      </div>
    </Nav>
  )
}

export default TopNav