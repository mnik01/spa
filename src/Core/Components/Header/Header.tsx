import { FC } from 'react'
import { Button } from '../Button'
import { Container } from '../Container'

export const Header: FC = () => (
  <Container>
    <div className="a-main-shadowed rounded-b-2xl h-16 flex justify-between px-4">
      logo
      <div className="flex gap-x-4 self-center">
        <Button text="Корзина" />
        <Button text="Ru" />

        {/* TODO: i18n */}
        {/* TODO: footer */}
      </div>
    </div>
  </Container>
)
