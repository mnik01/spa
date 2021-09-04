import { Page } from 'Core/Components/Page'
import { FC } from 'react'

const MainPage: FC = () => (
  <Page>
    {Array.from({ length: 90 }).map(() => (
      <p>hello</p>
    ))}
  </Page>
)
export default MainPage
