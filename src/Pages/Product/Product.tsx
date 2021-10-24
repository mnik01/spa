import { Container } from 'Core/Components/Container'
import { Page } from 'Core/Components/Page'
import { getProductInfo, getProductInfoFromUrl } from 'Core/Utils'
import { FC } from 'react'
// TODO: import { Typo } from 'mui01'
import './Product.scss'

const Product: FC = () => {
  const { sku } = getProductInfoFromUrl()
  const { title, price, img } = getProductInfo(sku)

  return (
    <Page mainClassName="mt-4" rounded={false} fullSize>
      <Container>
        <div className="pdp">
          <div className="pdp__img-and-info">
            <picture className="pdp__img">
              <img
                className="rounded-xl"
                title={title}
                alt="product pic"
                src={img}
              />
            </picture>
            <div>
              <h1 className="pdp__title">{title}</h1>
              <h2 className="pdp__price">{price}</h2>
            </div>
          </div>
        </div>
      </Container>
    </Page>
  )
}

export default Product
