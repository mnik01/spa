import { FC } from 'react'
import './Container.css'
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
