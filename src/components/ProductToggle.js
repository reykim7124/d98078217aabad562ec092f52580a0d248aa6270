import { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
import { ProductContext } from '../contexts/ProductContext'

const ButtonProductWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 35px;
  border: 1px solid ${props => props.outline};
  border-radius: 7px;
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
    border-radius: 7px 0 0 7px;
  }

  &:last-child {
    border-radius: 0 7px 7px 0;
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

export default ProductToggle