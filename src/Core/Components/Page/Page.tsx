import { FC } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { Container } from '../Container'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Main } from '../Main'
import './Page.css'
import { PageProps } from './types'

export const Page: FC<PageProps> = ({
  shouldShowHeader = true,
  shouldShowFooter = true,
  fullSize = false,
  ...properties
}) => (
  <Scrollbars style={{ width: '100vw', height: '100vh' }}>
    <div id="scrollContainer" className="scroll-container text-gray-700">
      {shouldShowHeader && <Header />}

      {!fullSize ? (
        <Container className="container">
          <Main {...properties} />
        </Container>
      ) : (
        <Main {...properties} />
      )}
    </div>

    {shouldShowFooter && <Footer />}
  </Scrollbars>
)
