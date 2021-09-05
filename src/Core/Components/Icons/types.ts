export type IconSize = 'XL' | 'L' | 'M' | 'S'

export interface IconProps {
  className?: string
  color?: string
  fill?: string
  height?: number
  onClick?: () => void
  originalHeight?: number
  originalWidth?: number
  size?: IconSize
  stroke?: string
  type?: 'bold' | 'light' | 'fill' | 'color'
  viewBox?: string
  width?: number
}

export interface GetSizeParameters {
  height: number | undefined
  ratio: number
  size?: IconSize
  width: number | undefined
}
