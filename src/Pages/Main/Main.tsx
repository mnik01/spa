import { Page } from 'Core/Components/Page'
import { ProductList } from 'Core/Components/ProductList'
import { FC } from 'react'

const MainPage: FC = () => {
  const products = [
    { title: 'iPhone X', price: 299_000, sku: 1000 },
    {
      title: 'Xiaomi Redmi Note 5',
      price: 299_000,
      sku: 1001,
    },
    { title: 'Samsung A31', price: 239_000, sku: 1002 },
    { title: 'Xiaomi Mi 6', price: 250_000, sku: 1003 },
    { title: 'Samsung A41', price: 300_000, sku: 1004 },
    { title: 'Samsung A51+', price: 69_000, sku: 1005 },
  ]

  return (
    <Page>
      <ProductList products={products} />
    </Page>
  )
}
export default MainPage
