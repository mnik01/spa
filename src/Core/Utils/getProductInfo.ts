export interface ProductInfo {
  title: string,
  sku: string,
  price: number,
  oldPrice?: number,
  description: string,
  img: string,
}

export const getProductInfo = (sku: string): ProductInfo => ({
  title: "Iphone XR",
  sku,
  price: 299_000,
  oldPrice: 320_000,
  img: '#',
  description: 'lorem200',
});

