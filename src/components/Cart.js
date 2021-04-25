import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'

const CartWrapper = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  position: fixed;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
`

const CartContainer = styled.div`
  border-radius: 5px;
  background-color: ${props => props.darkRed};
  color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Cart = (props) => {
  const theme = useContext(ThemeContext)

  return(
    <CartWrapper>
      <CartContainer darkRed={theme.darkRed}>
        <div>
          <div style={{fontWeight: '600', fontSize: '0.875rem'}}>
            <span style={{paddingRight: '8px', borderRight: '1px solid white'}}>{ props.items.length } Items</span>
            <span style={{marginLeft: '8px'}}>
              { new Intl.NumberFormat('id-ID', 
                { 
                  style: 'currency', 
                  currency: 'IDR', 
                  maximumSignificantDigits: 3 
                  }
                ).format(props.items.reduce((a, b) => a + b, 0)) }
              </span>
            </div>
          <div style={{fontSize: '0.75rem', marginTop: '4px'}}>Termasuk Ongkos Kirim</div>
        </div>
        <div>
          <i className='material-icons'>shopping_cart</i>
          <i className='material-icons'>chevron_right</i>
        </div>
      </CartContainer>
    </CartWrapper>
  )
}

export default Cart
