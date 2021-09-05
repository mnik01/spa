import { FC } from 'react'
import './styles/aliases.css'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({
  onClick = () => {},
  isDisabled = false,
  text,
}) => (
  <button
    className={`btn btn-sm ${isDisabled ? 'btn-disabled	' : ''}`}
    type="button"
    onClick={onClick}
    disabled={isDisabled}>
    {text}
  </button>
)
