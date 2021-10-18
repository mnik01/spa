export interface UrlProductInfo {
  sku: string,
}

export const getProductInfoFromUrl = (): UrlProductInfo => ({
  sku: '00001'
})

// TODO: parse URL to sku
