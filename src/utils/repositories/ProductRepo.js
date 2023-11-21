import { readFileSync } from 'fs'
const { products } = JSON.parse(readFileSync('../../mocks/Product.json'))

/** productId 를 입력받아, 같은 id 를 가지는 상품을 반환합니다. */
const GetProductOneById = (productId) => {
	const findProduct = products.filter(
		(product) => product.productId === +productId
	)[0]
	return findProduct && findProduct
}
/** productId 를 배열을 입력받아, 각 id 와 같은 상품 리스트를 반환합니다. */
const GetProductsByIds = (productIds) => {
	const findProducts = products.filter((product) =>
		productIds.includes(product.productId)
	)
	return findProducts && findProducts
}
/** 모든 상품 정보를 반환합니다. */
const GetProductsAll = () => {
	return products
}

const ProductRepo = { GetProductOneById, GetProductsByIds, GetProductsAll }
export default ProductRepo
