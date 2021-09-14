import clsx from 'clsx'
import { useGetCurrentPath, useRedirect } from 'Core/Hooks'
import { useIsMobile } from 'Core/Hooks/useIsMobile'
import i18n, { I18nContext } from 'i18n'
import { FC, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Pages } from 'types/enums'
import { Button } from '../Button'
import { Container } from '../Container'
import { Logo } from '../Logo'

export const Header: FC = () => {
  const { t } = useTranslation()
  const { changeLang } = useContext(I18nContext)
  const isRussian = i18n.language === 'ru'
  const redirect = useRedirect()
  const { isMainPage } = useGetCurrentPath()
  const HEADER_SPEAD_VALUE = 64

  const changePageHandler = () => {
    if (isMainPage) {
      redirect(Pages.Cart)
    } else {
      redirect(Pages.Main)
    }
  }

  const logoClickHandler = () => {
    redirect(Pages.Main)
  }

  const langChangeHandler = () => {
    if (isRussian) {
      changeLang('en')
    } else {
      changeLang('ru')
    }
  }
  const [isMobileViewport] = useIsMobile()
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const needToFixHeader = headerScrolled && !isMobileViewport

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let ticking = false

    const scrollContainer =
      document.querySelector('#scrollContainer')?.parentElement

    if (scrollContainer) {
      const scrollHandler = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (scrollContainer.scrollTop >= HEADER_SPEAD_VALUE) {
              setHeaderScrolled(true)
            } else {
              setHeaderScrolled(false)
            }
            ticking = false
          })

          ticking = true
        }
      }

      scrollContainer.addEventListener('scroll', scrollHandler)
      return () => {
        scrollContainer.removeEventListener('resize', scrollHandler)
      }
    }
  }, [])

  return (
    <Container
      isDisabled={needToFixHeader}
      className={clsx('transition-all sticky top-0', {
        'w-full': needToFixHeader,
      })}>
      <header
        className={clsx(
          'transition-all a-main-shadowed h-16 flex justify-between px-4',
          {
            'rounded-b-2xl': !needToFixHeader,
            'px-12': needToFixHeader,
          },
        )}>
        <Logo onClick={logoClickHandler} className="self-center" />
        <div className="flex gap-x-4 self-center">
          <Button
            onClick={changePageHandler}
            text={!isMainPage ? t('common.toMain') : t('cart.cart')}
          />
          <Button
            onClick={langChangeHandler}
            text={isRussian ? t('common.ru') : t('common.en')}
          />
        </div>
      </header>
    </Container>
  )
}
