import { lazy, ReactElement, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// const Gallery = lazy(() => import('Pages/Gallery'))
// const Details = lazy(() => import('Pages/Details'))

const CartPage = lazy(() => import('Pages/Cart'))
const CheckoutPage = lazy(() => import('Pages/Checkout'))
const MainPage = lazy(() => import('Pages/Main'))

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading</p>}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:cart" component={CartPage} />
          <Route path="/:checkout" component={CheckoutPage} />
          <Route path="/:orders" component={CheckoutPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
