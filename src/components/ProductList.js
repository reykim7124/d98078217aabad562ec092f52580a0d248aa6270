import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
import { ProductContext } from '../contexts/ProductContext'
import { CalendarContext } from '../contexts/CalendarContext'
import ProductCard from './ProductCard'

const ProductWrapper = styled.div`
  padding: 16px;
  margin-top: 168px;

  & .date-container {
    font-weight: 600;
    color: ${props => props.text}
  }

  & .product-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
  }
`

const ProductList = () => {
  const theme = useContext(ThemeContext)
  const { menu } = useContext(ProductContext)
  const { now } = useContext(CalendarContext)

  return (
    <ProductWrapper text={theme.text}>
      <div className='date-container'>{ `${now.day}, ${now.date} ${now.month} ${now.year}` }</div>
      <div className='product-card-container'>
        {menu.map((item, i) => (
          <ProductCard
            key={i}
            title={item.title}
            image={item.image}
            price={item.price}
            author={item.author}
          />
        ))}
      </div>
    </ProductWrapper>
  )
}

export default ProductList