import { MouseEventHandler } from 'react'

export interface ButtonProps {
  isDisabled?: boolean
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
