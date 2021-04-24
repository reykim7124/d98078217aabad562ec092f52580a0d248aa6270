import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 20px;
  min-height: 120px;
  width: 100%;
  max-width: 343px;
  box-shadow: ${props => props.shadow};
  margin-bottom: 16px;

  & img {
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }
`

const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  align-items: center;

  & .price {
    font-weight: 600;
    color: ${props => props.text};
  }
`

const AddToCartButton = styled.button`
  border: none;
  background-color: ${props => props.lightRed};
  color: ${props => props.bg};
  display: flex;
  align-items: center;
  padding: 8px 24px;
  font-size: 1rem;
  border-radius: 7px;

  & i {
    font-size: 1.25rem;
    margin-left: 4px;
  }
`

const ProductCard = (props) => {
  const theme = useContext(ThemeContext)
  const ratings = ['star', 'star', 'star', 'star', 'star_half']
  return (
    <Card shadow={theme.shadow}>
      <img src={props.image} alt={props.title} width='100%' height='250px' />
      <div style={{padding: '16px', paddingTop: '8px'}}>
        <div style={{display: 'flex'}}>
          <span style={{color: theme.subText, marginRight: '4px', fontSize: '0.875rem'}}>4.5</span>
          <div style={{display: 'flex'}}>
            {ratings.map((item, i) => (
              <i className='material-icons' key={i} style={{color: theme.lightRed, fontSize: '1rem'}}>{ item }</i>
            ))}
          </div>
        </div>
        <div style={{fontWeight: '600', color: theme.text, margin: '8px 0'}}>{ props.title }</div>
        <div style={{fontSize: '0.875rem', color: theme.subText}}>by { props.author }</div>
        <PriceButtonWrapper text={theme.text}>
          <span className='price'>Rp { props.price }</span>
          <AddToCartButton bg={theme.bg} lightRed={theme.lightRed}>Add <i className='material-icons'>add</i></AddToCartButton>
        </PriceButtonWrapper>
      </div>
    </Card>
  )
}

export default ProductCard