import { useLocation } from 'react-router-dom'
import { Pages } from 'types/enums'

export interface UseGetCurrentPathResult {
  pathname: string
  isCartPage: boolean
  isCheckoutPage: boolean
  isProductPage: boolean
  isMainPage: boolean
}
export type UseGetCurrentPath = () => UseGetCurrentPathResult

export const useGetCurrentPath: UseGetCurrentPath = () => {
  const { pathname } = useLocation()

  const isCartPage = pathname === Pages.Cart
  const isCheckoutPage = pathname === Pages.Checkout
  const isProductPage = pathname === Pages.Product
  const isMainPage = pathname === Pages.Main

  return { pathname, isCartPage, isCheckoutPage, isProductPage, isMainPage }
}
