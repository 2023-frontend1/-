import { readFileSync } from 'fs'
const { users } = JSON.parse(readFileSync('../mocks/User.json'))
const { products } = JSON.parse(readFileSync('../mocks/Product.json'))
const { reviews } = JSON.parse(readFileSync('../mocks/Review.json'))

/**
 * [GetUsersInfoByUserId]
 *
 * @param
 *  => userId
 *
 * @return
 *  => {
 *    userId: number
 *    userNickname: string
 *    userLocation: string
 *    mannerTemperature: number
 *    mannerRate : [number,number,number,number,number,number,number,number]
 *    products:
 *              [
 *                    {
 *                      productsId: number
 *                      ImageSrc: string(url)
 *                      productName: string
 *                      interestCnt: number
 *                      chattingCnt: number
 *                    }
 *              ]
 *    reviewIdList:
 *              [
 *                    {
 *                      reviewId: number
 *                      description: string
 *                      create: string(date)
 *                      userNickname: string
 *                     }
 *              ]
 *
 *
 *     }
 */
const GetUsersInfoByUserId = (userId) => {
	// 유저 정보 가져오기
	const findUserOne = users.filter((user) => user.userId === userId)[0]

	// 유저가 판매 (중인 or 했던) 물품 정보 가져오기
	const productsSummaries = GetProductSummariesByProductIds(
		findUserOne.itemIdList
	)

	// 유저가 판매 했던 물품에 달렸던 리뷰 정보 가져오기
	const productsReviews = GetReviewsByProductIds(findUserOne.itemIdList)

	const result = {
		userId: findUserOne.userId,
		userNickname: findUserOne.userNickname,
		userLocation: findUserOne.userLocation,
		mannerTemperature: findUserOne.mannerTemperature,
		mannerRate: findUserOne.mannerRate,
		products: [...productsSummaries],
		reviewIdList: [...productsReviews],
	}

	console.log(result)
}

/**
 * [GetProductSummariesByProductIds]
 *
 * @param
 *  => productIdArr : [productId, ....]
 *
 * @return
 * {
 *     productsId: number
 *     ImageSrc: string(url)
 *     productName: string
 *     interestCnt: number
 *     chattingCnt: number
 * }
 */
const GetProductSummariesByProductIds = (productIdArr) => {
	const productList = products.filter((product) =>
		productIdArr.includes(product.productId)
	)
	const result = productList.map((product) => {
		return {
			productId: product.productId,
			ImageSrc: product.ImageSrcs[0],
			productName: product.productName,
			interestCnt: product.interestCnt,
			chattingCnt: product.chattingCnt,
		}
	})
	return result
}

/**
 * [GetReviewsByProductIds]
 *
 * @param
 *  => productIdArr : [productId, ....]
 *
 * @return
 * {
 *    reviewId: number
 *    description: string
 *    create: string(date)
 *    userNickname: string
 * }
 */
const GetReviewsByProductIds = (productIdArr) => {
	const reviewList = reviews.filter((review) =>
		productIdArr.includes(review.reviewId)
	)
	const result = reviewList.map((review) => {
		return {
			reviewId: review.reviewId,
			description: review.description,
			create: review.create,
			userNickname: GetUserNicknameByUserId(review.userId),
		}
	})
	return result
}

const GetUserNicknameByUserId = (userId) => {
	return users.filter((user) => user.userId == userId)[0].userNickname
}

export default { GetUsersInfoByUserId }
