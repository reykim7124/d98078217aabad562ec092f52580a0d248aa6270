import { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import ModalLocation from './ModalLocation'
import styled from 'styled-components'

const Nav = styled.nav`
  backgroundColor: ${props => props.bg};
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.outline};
  z-index: 2;
`

class TopNav extends Component {
  render() {
    const { bg, text, outline } = this.context
    return (
      <Nav bg={bg} outline={outline}>
        <i className="material-icons" style={{color: text}}>arrow_back</i>
        <ModalLocation />
      </Nav>  
    )
  }
}

TopNav.contextType = ThemeContext
export default TopNav