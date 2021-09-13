import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { CloseIcon } from '../Icons'
import './styles/Modal.css'
import { ContentVerticalAlign, ModalProps } from './types'

const defaultProps = {
  contentLabel: 'Модальное окно',
  closeText: 'Назад',
  // closeTimeoutMS: 140,
  contentVerticalAlign: 'middle' as ContentVerticalAlign,
}

const Modal: FC<ModalProps> = ({
  className,
  children,
  isTextClose = false,
  contentVerticalAlign,
  isMobile,
  isShowCloseBtn,
  closeText,
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
      className={clsx('custom-modal', isMobile && '--mobile', className)}
      contentRef={(node): void => setModalReference(node)}
      isOpen={isOpen}
      preventScroll
      onRequestClose={onClose}
      overlayClassName={clsx(
        'custom-modal-overlay',
        `--vertical-${String(contentVerticalAlign)[0].toLowerCase()}`,
      )}
      style={{
        content: {
          transition: `${transitionDuration}ms`,
        },
        overlay: {
          transition: `${transitionDuration}ms`,
        },
      }}
      {...properties}>
      <div className="flex flex-col">
        {Boolean(isShowCloseBtn) && (
          <button
            type="button"
            className={clsx(
              'custom-modal__close-btn',
              !isTextClose && 'flex justify-end',
            )}
            onClick={onClose}>
            {isTextClose && (
              <div className="flex flex-row-reverse justify-between">
                <CloseIcon />
                {closeText}
              </div>
            )}
            {!isTextClose && <CloseIcon height={24} width={24} />}
          </button>
        )}
        {children}
      </div>
    </ReactModal>
  )
}

Modal.defaultProps = defaultProps

export default Modal
