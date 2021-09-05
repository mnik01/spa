import { FC } from 'react'
import { GetSizeParameters, IconProps } from './types'

const DEFAULT_ICON_SIZES = {
  XL: { width: 24, height: 24 },
  L: { width: 24, height: 24 },
  M: { width: 20, height: 20 },
  S: { width: 16, height: 16 },
}

const getRatio = (width?: number, height?: number): number => {
  if (width && height) {
    return width / height
  }

  return 1
}

const getSize = (
  parameters: GetSizeParameters,
): { height: number | undefined; width: number | undefined } => {
  const { size, width, height, ratio } = parameters

  if (size && DEFAULT_ICON_SIZES[size]) {
    return DEFAULT_ICON_SIZES[size]
  }

  switch (true) {
    case typeof width !== 'undefined' && typeof height !== 'undefined':
      return { width, height }
    case typeof width === 'number' && typeof height === 'undefined':
      return { width, height: width ?? 0 / ratio }
    case typeof width === 'undefined' && typeof height === 'number':
      return { width: height ?? 0 * ratio, height }
    default:
      return { width: 24, height: 24 }
  }
}

const getViewBox = (
  viewBox: string | undefined,
  originalWidth: number | undefined,
  originalHeight: number | undefined,
): string => viewBox || `0 0 ${originalWidth ?? '0'} ${originalHeight ?? '0'}`

const Icon: FC<IconProps> = ({
  size,
  originalWidth,
  originalHeight,
  width,
  height,
  fill,
  stroke,
  children,
  viewBox,
  ...properties
}) => (
  <svg
    {...properties}
    fill={fill}
    stroke={stroke}
    viewBox={getViewBox(viewBox, originalWidth, originalHeight)}
    {...getSize({
      size,
      width,
      height,
      ratio: getRatio(originalWidth, originalHeight),
    })}>
    {children}
  </svg>
)

Icon.defaultProps = {
  fill: 'none',
  stroke: '',
}

export default Icon
