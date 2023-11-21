/**
 * [GetUsersInfoByUserId]
 *
 * @param
 *  => productId
 *
 * @return
 *  => {
				productId: number
				ImageSrcs: [ string(url), string(url), string(url), string(url) ],
				productName: string,
				productPrice: number,
				interestCnt: number,
				chattingCnt: number,
				productDetail: string,
				status: ["complete"|"onSale"],
				userId: number
				userNickname: string
				userLocation: string
				mannerTemperature: number
      }
 */

import ProductRepo from '../repositories/ProductRepo.js'
import UserRepo from '../repositories/UserRepo.js'

const GetProductDetailById = (productId) => {
	const findProductOne = ProductRepo.GetProductOneById(productId)
	const findUser = UserRepo.GetUserOneById(findProductOne.userId)
	console.log(findProductOne.userId)
	const result = {
		productId: findProductOne.productId,
		ImageSrcs: findProductOne.ImageSrcs,
		productName: findProductOne.productName,
		productPrice: findProductOne.productPrice,
		interestCnt: findProductOne.interestCnt,
		chattingCnt: findProductOne.chattingCnt,
		productDetail: findProductOne.productDetail,
		status: findProductOne.status,
		userId: findUser.userId,
		userNickname: findUser.userNickname,
		userLocation: findUser.userLocation,
		mannerTemperature: findUser.mannerTemperature,
	}
	return result
}

/**
 * [GetProductsSummaries]
 *
 * @param
 *  => limits (불러올 상품 갯수)
 *
 * @return
 * => {
 			products: [
					productId: number
					ImageSrc: string(url)
					productName: string
					productPrice: number
					userLocation: string
					interestCnt: number
					chattingCnt: number
  		]
	}
 */

const GetProductsSummaries = (limit = 15) => {
	const findProducts = ProductRepo.GetProductsAll()
	const products = findProducts.map((product) => {
		const findUserOne = UserRepo.GetUserOneById(product.userId)
		return {
			productId: product.productId,
			ImageSrc: product.ImageSrcs[0],
			productName: product.productName,
			productPrice: product.productPrice,
			userLocation: findUserOne.userLocation,
			interestCnt: product.interestCnt,
			chattingCnt: product.chattingCnt,
		}
	})
	if (products.length > limit) products.splice(limit)
	const result = {
		products: [...products],
	}
	return result
}
const ProductService = { GetProductDetailById, GetProductsSummaries }
export default ProductService
