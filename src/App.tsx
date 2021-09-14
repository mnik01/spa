import { PageLoader } from 'Core/Components/PageLoader'
import { skeletonBgColor, skeletonFgColor } from 'Core/constants'
import { I18nContext, i18nContextDefaultValue } from 'i18n'
import { lazy, ReactElement, Suspense } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Pages } from 'types/enums'

const CartPage = lazy(() => import('Pages/Cart/Cart'))
const CheckoutPage = lazy(() => import('Pages/Checkout/Checkout'))
const MainPage = lazy(() => import('Pages/Main/Main'))
const ProductPage = lazy(() => import('Pages/Product/Product'))

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
              <Route exact path={Pages.Main} component={MainPage} />
              <Route path={Pages.Cart} component={CartPage} />
              <Route path={Pages.Checkout} component={CheckoutPage} />
              <Route path="/orders" component={CheckoutPage} />
              <Route path="/order/:orderId" component={CheckoutPage} />
              <Route path="/p/:sku" component={ProductPage} />
              <Route path={Pages.Loading} component={PageLoader} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </SkeletonTheme>
    </I18nContext.Provider>
  )
}
