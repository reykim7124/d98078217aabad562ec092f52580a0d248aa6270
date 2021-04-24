import { createContext, Component } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bg: '#ffffff',
      text: '#424749',
      subText: '#6e7679',
      outline: '#f1f1f2',
      shadow: '0 8px 10px 0 rgba(10, 31, 68, 0.1)',
      lightRed: '#f9423a',
      darkRed: '#a23530'
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider