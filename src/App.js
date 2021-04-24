import { Component } from 'react'
import ThemeContextProvider from './contexts/ThemeContext'
import TopNav from './components/TopNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <TopNav />
        </ThemeContextProvider>
      </div>
    )
  }
}

export default App