import { useState } from 'react'
import { ThemeContext, theme } from './contexts/ThemeContext'
import { ProductContext, menu } from './contexts/ProductContext'
import TopNav from './components/TopNav'
import ProductList from './components/ProductList'

const App = () => {
  const [selectedMenu, toggleMenu] = useState(menu.lunch)

  const handleToggleMenu = (e) => {
    if (e) {
      toggleMenu(menu.lunch)
    } else {
      toggleMenu(menu.dinner)
    }
  }

  return (
    <div>
      <ThemeContext.Provider value={{...theme}}>
        <ProductContext.Provider value={{menu: [...selectedMenu], toggleMenu: handleToggleMenu}}>
          <TopNav />
          <ProductList /> 
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App