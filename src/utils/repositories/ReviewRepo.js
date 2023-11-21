import { readFileSync } from 'fs'
const { reviews } = JSON.parse(readFileSync('../../mocks/Review.json'))

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
