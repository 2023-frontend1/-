import { readFileSync } from 'fs'
const { products } = JSON.parse(readFileSync('../../mocks/Product.json'))

const GetProductOneById = (productId) => {
	const findProduct = products.filter(
		(product) => product.productId === +productId
	)[0]
	return findProduct && findProduct
}

const GetProductsByIds = (productIds) => {
	const findProducts = products.filter((product) =>
		productIds.includes(product.productId)
	)
	return findProducts && findProducts
}

const GetProductsAll = () => {
	return products
}

const ProductRepo = { GetProductOneById, GetProductsByIds, GetProductsAll }
export default ProductRepo
