import { FC } from 'react'
import './styles/aliases.css'
import { ContainerProps } from './types'

export const Container: FC<ContainerProps> = ({
  isDisabled = false,
  children,
  className,
}) => (
  <div className={`${!isDisabled ? 'a-container' : ''} ${className ?? ''}`}>
    {children}
  </div>
)
