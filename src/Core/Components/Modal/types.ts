import ReactModal from 'react-modal'

export type ContentVerticalAlign = 'top' | 'middle' | 'bottom'

export interface ModalProps extends Omit<ReactModal.Props, 'isOpen'> {
  closeBtnText?: string
  contentVerticalAlign?: ContentVerticalAlign
  isMobilePage?: boolean
  isOpen: boolean
  isShowCloseBtn?: boolean
  isTextClose?: boolean
  onClose: (event: React.MouseEvent | React.KeyboardEvent) => void
  title?: string
  transitionDuration?: number
}
