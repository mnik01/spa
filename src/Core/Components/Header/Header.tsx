import { useGetCurrentPath, useRedirect } from 'Core/Hooks'
import { Pages } from 'Core/types'
import i18n, { I18nContext } from 'i18n'
import { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import { Container } from '../Container'

export const Header: FC = () => {
  const { t } = useTranslation()
  const { changeLang } = useContext(I18nContext)
  const isRussian = i18n.language === 'ru'
  const redirect = useRedirect()
  const { isCartPage } = useGetCurrentPath()

  const changePageHandler = () => {
    if (isCartPage) {
      redirect(Pages.Main)
    } else {
      redirect(Pages.Cart)
    }
  }
  const langChangeHandler = () => {
    if (isRussian) {
      changeLang('en')
    } else {
      changeLang('ru')
    }
  }

  return (
    <Container>
      <div className="a-main-shadowed rounded-b-2xl h-16 flex justify-between px-4">
        logo
        <div className="flex gap-x-4 self-center">
          <Button
            onClick={changePageHandler}
            text={isCartPage ? t('common.toMain') : t('cart.cart')}
          />
          <Button
            onClick={langChangeHandler}
            text={isRussian ? t('common.ru') : t('common.en')}
          />
          {/* TODO: footer */}
        </div>
      </div>
    </Container>
  )
}
