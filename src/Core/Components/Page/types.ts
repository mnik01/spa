import { ReactNode } from 'react'

export interface PageProps {
  shouldShowHeader?: boolean
  shouldShowFooter?: boolean
  fullSize?: boolean
  rounded?: boolean
  children: ReactNode
  mainClassName?: string
}
