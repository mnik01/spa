import { FC } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { Container } from '../Container'
import { Footer } from '../Footer'
import { Header } from '../Header'
import './Page.css'
import { PageProps } from './types'

export const Page: FC<PageProps> = ({ shouldShowHeader = true, children }) => (
  <Scrollbars style={{ width: '100vw', height: '100vh' }}>
    <div id="scrollContainer" className="scroll-container text-gray-700">
      {shouldShowHeader && <Header />}

      <Container className="container">
        <main className="main">{children}</main>
      </Container>
    </div>
    <Footer />
  </Scrollbars>
)
