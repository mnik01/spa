/* eslint-disable max-len */
import { FC } from 'react'
import Icon from '../Icon'
import { IconProps } from '../types'

const CloseCross: FC<IconProps> = ({
  originalWidth,
  originalHeight,
  type,
  ...properties
}) => {
  switch (type) {
    case 'light':
      return (
        <Icon
          originalHeight={originalHeight}
          originalWidth={originalWidth}
          {...properties}>
          <path
            clipRule="evenodd"
            d="M6.69671 6.69669C6.89197 6.50143 7.20855 6.50143 7.40382 6.69669L17.3033 16.5962C17.4986 16.7914 17.4986 17.108 17.3033 17.3033C17.108 17.4986 16.7915 17.4986 16.5962 17.3033L6.69671 7.4038C6.50145 7.20854 6.50145 6.89196 6.69671 6.69669Z"
            fill="#404040"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M6.69674 17.3033C6.892 17.4986 7.20858 17.4986 7.40385 17.3033L17.3033 7.40381C17.4986 7.20855 17.4986 6.89197 17.3033 6.69671C17.1081 6.50144 16.7915 6.50144 16.5962 6.69671L6.69674 16.5962C6.50148 16.7915 6.50148 17.108 6.69674 17.3033Z"
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
            d="M6.69671 6.69669C6.89197 6.50143 7.20855 6.50143 7.40382 6.69669L17.3033 16.5962C17.4986 16.7914 17.4986 17.108 17.3033 17.3033C17.108 17.4986 16.7915 17.4986 16.5962 17.3033L6.69671 7.4038C6.50145 7.20854 6.50145 6.89196 6.69671 6.69669Z"
            fill="#404040"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M6.34316 6.34315C6.73368 5.95263 7.36684 5.95263 7.75737 6.34315L17.6569 16.2426C18.0474 16.6332 18.0474 17.2663 17.6569 17.6569C17.2663 18.0474 16.6332 18.0474 16.2427 17.6569L6.34316 7.75737C5.95263 7.36684 5.95263 6.73368 6.34316 6.34315Z"
            fill="#404040"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M6.69674 17.3033C6.892 17.4986 7.20858 17.4986 7.40385 17.3033L17.3033 7.40381C17.4986 7.20855 17.4986 6.89197 17.3033 6.69671C17.1081 6.50144 16.7915 6.50144 16.5962 6.69671L6.69674 16.5962C6.50148 16.7915 6.50148 17.108 6.69674 17.3033Z"
            fill="#404040"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M6.34319 17.6568C6.73371 18.0474 7.36688 18.0474 7.7574 17.6568L17.6569 7.75735C18.0474 7.36683 18.0474 6.73366 17.6569 6.34314C17.2664 5.95261 16.6332 5.95261 16.2427 6.34314L6.34319 16.2426C5.95266 16.6332 5.95266 17.2663 6.34319 17.6568Z"
            fill="#404040"
            fillRule="evenodd"
          />
        </Icon>
      )
  }
}

CloseCross.defaultProps = {
  originalWidth: 24,
  originalHeight: 24,
  width: 24,
  height: 24,
}

export default CloseCross
