import { notify } from 'Core/Utils/notify'
import i18n, { I18nContext } from 'i18n'
import { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import { Container } from '../Container'

export const Header: FC = () => {
  const { t } = useTranslation()
  const { langs, changeLang } = useContext(I18nContext)
  const isRussian = i18n.language === 'ru'

  const goToCartHandler = () => {
    notify(`Go to cart!${JSON.stringify(langs)}`)
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
          <Button onClick={goToCartHandler} text={t('cart.cart')} />
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
