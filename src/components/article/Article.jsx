import { ImageBox } from '..'
import S from './Article.styles'

const Article = ({
	productName,
	productPrice,
	userLocation,
	chattingCnt,
	interestCnt,
	src,
	...rest
}) => {
	return (
		<S.ArticleBox {...rest}>
			<ImageBox src={src} size={'smallProduct'} boxshape={'default'} />
			<S.H2>{productName}</S.H2>
			<S.PriceDiv>{productPrice}원</S.PriceDiv>
			<S.LocationDiv>{userLocation}</S.LocationDiv>
			<S.Span>관심 {chattingCnt} ∙ </S.Span>
			<S.Span>채팅 {interestCnt}</S.Span>
		</S.ArticleBox>
	)
}

export default Article
