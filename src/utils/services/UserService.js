import ProductRepo from '../repositories/ProductRepo.js'
import ReviewRepo from '../repositories/ReviewRepo.js'
import UserRepo from '../repositories/UserRepo.js'

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
 *    reviews:
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
	const findUserOne = UserRepo.GetUserOneById(userId)

	// 유저가 판매 (중인 or 했던) 물품 정보 가져오기
	const findProducts = ProductRepo.GetProductsByIds(findUserOne.itemIdList)
	const processedProducts = findProducts.map((product) => {
		return {
			productsId: product.productId,
			ImageSrc: product.ImageSrcs[0],
			productName: product.productName,
			interestCnt: product.interestCnt,
			chattingCnt: product.chattingCnt,
		}
	})

	// 유저가 판매 했던 물품에 달렸던 리뷰 정보 가져오기
	const findReviews = ReviewRepo.GetReviewsByProductIds(findUserOne.itemIdList)
	const processedReviews = findReviews.map((review) => {
		return {
			reviewId: review.reviewId,
			description: review.description,
			create: review.create,
			userNickname: review.userNickname,
		}
	})

	const result = {
		userId: findUserOne.userId,
		userNickname: findUserOne.userNickname,
		userLocation: findUserOne.userLocation,
		mannerTemperature: findUserOne.mannerTemperature,
		mannerRate: findUserOne.mannerRate,
		products: [...processedProducts],
		reviews: [...processedReviews],
	}

	return result
}

const UserService = { GetUsersInfoByUserId }
export default UserService
