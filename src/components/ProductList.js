import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from './ProductCard'

const ProductWrapper = styled.div`
  padding: 16px;
  margin-top: 136px;

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
  return (
    <ProductWrapper text={theme.text}>
      <div className='date-container'>Kamis, 19 September 2021</div>
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