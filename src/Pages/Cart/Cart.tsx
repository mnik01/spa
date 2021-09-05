import { Page } from 'Core/Components/Page'
import { FC } from 'react'

const CartPage: FC = () => (
  <Page>
    {Array.from({ length: 90 }).map(() => (
      <p>hello</p>
    ))}
  </Page>
)

export default CartPage
