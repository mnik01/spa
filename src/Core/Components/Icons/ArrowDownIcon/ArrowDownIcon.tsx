/* eslint-disable max-len */
import { FC } from 'react'
import Icon from '../Icon'
import { IconProps } from '../types'

const ArrowDown: FC<IconProps> = ({
  originalWidth,
  originalHeight,
  type,
  ...properties
}) => {
  switch (type) {
    case 'fill':
      return (
        <Icon
          originalHeight={originalHeight}
          originalWidth={originalWidth}
          {...properties}>
          <path
            d="M4.85355 7.85355L7.64644 10.6464C7.84171 10.8417 8.15829 10.8417 8.35355 10.6464L11.1464 7.85355C11.4614 7.53857 11.2383 7 10.7929 7L5.2071 7C4.76165 7 4.53857 7.53857 4.85355 7.85355Z"
            fill="#737171"
          />
        </Icon>
      )
    case 'light':
      return (
        <Icon
          originalHeight={originalHeight}
          originalWidth={originalWidth}
          {...properties}>
          <path
            clipRule="evenodd"
            d="M7.64645 10.6464C7.84171 10.4512 8.15829 10.4512 8.35355 10.6464L12 14.2929L15.6464 10.6464C15.8417 10.4512 16.1583 10.4512 16.3536 10.6464C16.5488 10.8417 16.5488 11.1583 16.3536 11.3536L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L7.64645 11.3536C7.45118 11.1583 7.45118 10.8417 7.64645 10.6464Z"
            fill="#404040"
            fillRule="evenodd"
          />
        </Icon>
      )
    default:
      return (
        <Icon
          originalHeight={originalHeight}
          originalWidth={originalWidth}
          {...properties}>
          <path
            clipRule="evenodd"
            d="M7.29289 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L12 13.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929Z"
            fill="#404040"
            fillRule="evenodd"
          />
        </Icon>
      )
  }
}

ArrowDown.defaultProps = {
  originalWidth: 24,
  originalHeight: 24,
  width: 24,
  height: 24,
}

export default ArrowDown
