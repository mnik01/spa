import { ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  isDisabled?: boolean
  className?: string
}
