import { notify } from 'Core/Utils/notify'
import { FC } from 'react'
import { Button } from '../Button'
import { Container } from '../Container'

export const Header: FC = () => {
  const goToCartHandler = () => {
    notify('Go to cart!')
  }
  const langChangeHandler = () => {
    notify('Change lang!')
  }

  return (
    <Container>
      <div className="a-main-shadowed rounded-b-2xl h-16 flex justify-between px-4">
        logo
        <div className="flex gap-x-4 self-center">
          <Button onClick={goToCartHandler} text="Корзина" />
          <Button onClick={langChangeHandler} text="Ru" />
          {/* TODO: i18n */}
          {/* TODO: footer */}
        </div>
      </div>
    </Container>
  )
}
