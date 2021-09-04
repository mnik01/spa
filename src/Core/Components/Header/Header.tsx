import { FC } from 'react'
import { Container } from '../Container'

export const Header: FC = () => (
  <Container>
    <div className="a-main-shadowed rounded-b-2xl h-16 flex justify-between px-4">
      logo
      <div className="flex gap-x-4 self-center">
        <button type="button">Корзина</button>
        <button type="button">Ru</button>
        {/* TODO: i18n */}
      </div>
    </div>
  </Container>
)
