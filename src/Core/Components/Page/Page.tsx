import { FC } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { Container } from '../Container'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { PageProps } from './types'

export const Page: FC<PageProps> = ({ shouldShowHeader = true, children }) => (
  <Scrollbars style={{ width: '100vw', height: '100vh' }}>
    <div id="scrollContainer" className="text-gray-700">
      {shouldShowHeader && <Header />}

      <Container className="py-6 h-full">
        <main className="a-main-shadowed flex flex-col gap-y-4 p-8 sm:rounded-2xl h-5/6">
          {children}
        </main>
      </Container>

      <Footer />
    </div>
  </Scrollbars>
)
