import { PageLoader } from 'Core/Components/PageLoader'
import { skeletonBgColor, skeletonFgColor } from 'Core/constants'
import { I18nContext, i18nContextDefaultValue } from 'i18n'
import { lazy, ReactElement, Suspense } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CartPage = lazy(() => import('Pages/Cart/Cart'))
const CheckoutPage = lazy(() => import('Pages/Checkout/Checkout'))
const MainPage = lazy(() => import('Pages/Main/Main'))

export default function App(): ReactElement {
  return (
    <I18nContext.Provider value={i18nContextDefaultValue}>
      <SkeletonTheme color={skeletonBgColor} highlightColor={skeletonFgColor}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
    </I18nContext.Provider>
  )
}
