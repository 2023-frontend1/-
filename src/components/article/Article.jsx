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
			<S.H2>{item.productName}</S.H2>
			<S.PriceDiv>{item.productPrice}원</S.PriceDiv>
			<S.LocationDiv>{item.userLocation}</S.LocationDiv>
			<S.Span>관심 {item.chattingCnt} ∙ </S.Span>
			<S.Span>채팅 {item.interestCnt}</S.Span>
		</S.ArticleBox>
	)
}

export default Article
