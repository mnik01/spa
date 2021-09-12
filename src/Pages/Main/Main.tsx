import { Page } from 'Core/Components/Page'
import { FC } from 'react'

const MainPage: FC = () => {
  const nums: number[] = Array.from({ length: 1 })

  return (
    <Page>
      {nums.map(element => (
        <p key={`${element} ${Math.random()}`}>hello</p>
      ))}
    </Page>
  )
}
export default MainPage
