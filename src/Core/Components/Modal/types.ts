import ReactModal from 'react-modal'

export type ContentVerticalAlign = 'top' | 'middle' | 'bottom'

export interface ModalProps extends Omit<ReactModal.Props, 'isOpen'> {
  closeText?: string
  contentVerticalAlign?: ContentVerticalAlign
  isMobile?: boolean
  isOpen: boolean
  isShowCloseBtn?: boolean
  isTextClose?: boolean
  onClose: (event: React.MouseEvent | React.KeyboardEvent) => void
  title?: string
  transitionDuration?: number
}
