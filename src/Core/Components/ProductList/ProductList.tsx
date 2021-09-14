import { FC } from 'react'
import { ProductCard } from '../ProductCard'
import './ProductList.css'
import { ProductListProps } from './types'

export const ProductList: FC<ProductListProps> = ({ products }) => (
  <div className="product-list">
    {products.map(productInfo => (
      <ProductCard key={productInfo.sku} {...productInfo} />
    ))}
  </div>
)
