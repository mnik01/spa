import { useIsMobile } from 'Core/Hooks/useIsMobile'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from '../Modal'
import { socialMedias } from './constants'
import './Footer.css'

export const Footer: FC = () => {
  const { t } = useTranslation()
  const [isModalOpened, setIsModalOpened] = useState(false)
  const toolsHandler = () => {
    setIsModalOpened(true)
  }

  const onModalCloseHandler = () => {
    setIsModalOpened(false)
  }

  const [isMobileViewport] = useIsMobile()
  return (
    <footer className="custom-footer text-neutral-content">
      <Modal
        isMobile={isMobileViewport}
        isShowCloseBtn
        onClose={onModalCloseHandler}
        isOpen={isModalOpened}>
        <div className="p-5 mt-4 text-center">
          <p>React</p>
          <p>Typescript</p>
          <p>ES6+</p>
          <p>React router dom</p>
          <p>i18n</p>
          <p>tailwind</p>
        </div>
      </Modal>
      <button
        onClick={toolsHandler}
        type="button"
        className="flex items-center gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          style={{ fill: '#8597e2' }}>
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
        </svg>
        <p className="text-white text-xs md:text-sm">
          {t('common.clickToKnowWhatToolsUsed')}
        </p>
      </button>
      <div className="flex gap-2 md:gap-4 md:place-self-center md:justify-self-end">
        {socialMedias.map(({ href, alt, path }) => (
          <div key={alt}>
            <a href={href}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: '#ede9fe' }}>
                <path d={path} />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </footer>
  )
}
