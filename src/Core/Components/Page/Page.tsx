import { FC } from 'react'
import { Container } from '../Container'
import { Header } from '../Header'
import { PageProps } from './types'

export const Page: FC<PageProps> = ({ shouldShowHeader = true, children }) => (
  <div className="text-gray-700">
    {shouldShowHeader && <Header />}

    <Container className="py-6 h-full">
      <div className="a-main-shadowed flex flex-col gap-y-4 p-8 sm:rounded-2xl h-5/6">
        {children}
      </div>
    </Container>
  </div>
)
