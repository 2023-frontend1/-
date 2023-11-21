import { readFileSync } from 'fs'
const { reviews } = JSON.parse(readFileSync('../../mocks/Review.json'))

/** 상품 아이디 리스트를 입력받아, 해당 상품 아이디를 가지는 리뷰 리스트를 반환합니다. */
const GetReviewsByProductIds = (productIds) => {
	const findReviews = reviews.filter((review) =>
		productIds.includes(review.productId)
	)
	return findReviews && findReviews
}
const ReviewRepo = {
	GetReviewsByProductIds,
}
export default ReviewRepo
