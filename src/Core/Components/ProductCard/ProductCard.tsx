import { thumbnailUrl } from 'Core/constants'
import { FC } from 'react'
import { ProductCardProps } from './types'

export const ProductCard: FC<ProductCardProps> = ({
  img = thumbnailUrl,
  title,
  sku,
  price,
}) => (
  <a href={`/p/${sku}`}>
    <img src={img} alt={`Product ${title}`} />
    <p>{title}</p>
    <p>{price}</p>
    <button type="button">В корзину</button>
  </a>
)
