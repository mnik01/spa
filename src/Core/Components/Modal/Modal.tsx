import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { ArrowDownIcon, CloseIcon } from '../Icons'
// import './Modal.scss'
import { ContentVerticalAlign, ModalProps } from './types'

const defaultProps = {
  contentLabel: 'Модальное окно',
  closeBtnText: 'Назад',
  closeTimeoutMS: 400,
  contentVerticalAlign: 'middle' as ContentVerticalAlign,
}

const Modal: FC<ModalProps> = ({
  className,
  children,
  closeBtnText,
  contentVerticalAlign,
  isMobilePage,
  isShowCloseBtn,
  isTextClose,
  onClose,
  isOpen,
  title,
  transitionDuration = 200,
  ...properties
}) => {
  const [modalReference, setModalReference] = useState<null | HTMLDivElement>(
    null,
  )

  useEffect(() => {
    if (!isOpen || !modalReference) return

    disableBodyScroll(modalReference)

    return (): void => {
      enableBodyScroll(modalReference)
    }
  }, [isOpen, modalReference])

  return (
    <ReactModal
      ariaHideApp={false}
      className={clsx('ModalNext', className)}
      contentRef={(node): void => setModalReference(node)}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={clsx(
        'OverlayNext',
        isMobilePage && '--mobile-page',
        `ReactModal__Overlay-ContentVerticalAlign-${String(
          contentVerticalAlign,
        )[0].toUpperCase()}${contentVerticalAlign?.slice(1) ?? ''}`,
      )}
      style={{
        content: {
          transition: `${transitionDuration}ms`,
        },
      }}
      {...properties}>
      {Boolean(isShowCloseBtn) && Boolean(!isMobilePage) && (
        <button
          type="button"
          className={clsx(
            'ModalNext__CloseBtn',
            isTextClose
              ? 'ModalNext__CloseBtn-Text'
              : 'ModalNext__CloseBtn-Cross',
            'reset-button-styles',
          )}
          onClick={onClose}>
          {Boolean(isTextClose) && (
            <>
              <ArrowDownIcon />
              {closeBtnText?.trim() || defaultProps.closeBtnText}
            </>
          )}
          {!isTextClose && <CloseIcon height={24} width={24} />}
        </button>
      )}
      {Boolean(title?.trim()) && { title }}
      {children}
    </ReactModal>
  )
}

Modal.defaultProps = defaultProps

export default Modal
