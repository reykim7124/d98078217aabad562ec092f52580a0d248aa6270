import { useState } from 'react'
import { ThemeContext, theme } from './contexts/ThemeContext'
import { ProductContext, menu, cartItems } from './contexts/ProductContext'
import { CalendarContext, cal, setToMonday } from './contexts/CalendarContext'
import styled from 'styled-components'
import TopNav from './components/TopNav'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const MobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.bg};
`

const MobileContainer = styled.div`
  width: 100%;
  max-width: 375px;
`

const App = () => {
  const [selectedMenu, toggleMenu] = useState(menu.lunch)
  const [cart, addToCart] = useState(cartItems)
  const [date, setCurrentDate] = useState(setToMonday(cal))

  const handleToggleMenu = (e) => {
    if (e) {
      toggleMenu(menu.lunch)
    } else {
      toggleMenu(menu.dinner)
    }
  }

  const handleAddToCart = (e) => {
    const newCart = [...cart, e]
    addToCart(newCart)
  }

  const handleSetCurrentDate = (e) => {
    const d = cal[e]
    setCurrentDate(d)
  }

  return (
    <MobileWrapper bg={theme.bg}>
      <MobileContainer>
        <ThemeContext.Provider value={{...theme}}>
          <ProductContext.Provider value={{ menu: [...selectedMenu], toggleMenu: handleToggleMenu, addToCart: handleAddToCart }}>
            <CalendarContext.Provider value={{ now: date, calendar: cal, setCurrentDate: handleSetCurrentDate }}>
              <TopNav />
              <ProductList />
            </CalendarContext.Provider>
            {cart.length > 0 && 
              <Cart items={cart} />
            }
          </ProductContext.Provider>
        </ThemeContext.Provider>
      </MobileContainer>
    </MobileWrapper>
  )
}

export default App