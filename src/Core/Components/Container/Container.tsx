import { FC } from 'react'
import './styles/aliases.css'
import { ContainerProps } from './types'

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={`a-container ${className ?? ''}`}>{children}</div>
)
