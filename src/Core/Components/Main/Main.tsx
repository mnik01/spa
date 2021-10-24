import clsx from 'clsx'
import { FC } from 'react'
import './Main.css'
import { MainProps } from './types'

export const Main: FC<MainProps> = ({
  children,
  rounded = true,
  mainClassName,
}) => (
  <main className={clsx('main', rounded && 'main--rounded', mainClassName)}>
    {children}
  </main>
)
