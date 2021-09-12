import { Page } from 'Core/Components/Page'
import { FC } from 'react'

const CartPage: FC = () => {
  const nums: number[] = Array.from({ length: 20 })

  return (
    <Page>
      {nums.map(element => (
        <p key={`${element} - ${Math.random()}`}>hello</p>
      ))}
    </Page>
  )
}

export default CartPage
