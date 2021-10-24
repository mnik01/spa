import { THUMB_URL } from 'Core/constants'
import { FC } from 'react'
import './ProductCard.css'
import { ProductCardProps } from './types'

export const ProductCard: FC<ProductCardProps> = ({
  img = THUMB_URL,
  title,
  sku,
  price,
}) => (
  <a className="product-card" href={`/p/${sku}`}>
    <img className="rounded-3xl" src={img} alt={`Product ${title}`} />
    <div>
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <button type="button">X</button>
    </div>
  </a>
)
