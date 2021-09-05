/* eslint-disable @typescript-eslint/no-floating-promises */
import { langs } from 'Core/constants'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { createContext } from 'react'
import { initReactI18next } from 'react-i18next'
// Locales
import * as enCart from './locales/en/cart.json'
import * as enCommon from './locales/en/common.json'
import * as ruCart from './locales/ru/cart.json'
import * as ruCommon from './locales/ru/common.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          cart: enCart,
          checkout: {},
          product: {},
          common: enCommon,
        },
      },
      ru: {
        translation: {
          cart: ruCart,
          checkout: {},
          product: {},
          common: ruCommon,
        },
      },
    },
  })

export default i18n

export const i18nContextDefaultValue = {
  langs,
  changeLang: (lngShort: string): void => {
    i18n.changeLanguage(lngShort)
  },
}
export const I18nContext = createContext(i18nContextDefaultValue)
