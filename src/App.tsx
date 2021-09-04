import { PageLoader } from 'Core/Components/PageLoader'
import { skeletonBgColor, skeletonFgColor } from 'Core/constants'
import { lazy, ReactElement, Suspense } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const CartPage = lazy(() => import('Pages/Cart/Cart'))
const CheckoutPage = lazy(() => import('Pages/Checkout/Checkout'))
const MainPage = lazy(() => import('Pages/Main/Main'))

export default function App(): ReactElement {
  return (
    <SkeletonTheme color={skeletonBgColor} highlightColor={skeletonFgColor}>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/orders" component={CheckoutPage} />
            <Route path="/order/:orderId" component={CheckoutPage} />
            <Route path="/p/:sku" component={CheckoutPage} />
            <Route path="/dev-loader" component={PageLoader} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </SkeletonTheme>
  )
}
