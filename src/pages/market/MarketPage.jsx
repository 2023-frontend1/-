import Article from '../../components/article/Article'
import { useNavigate } from 'react-router'
import MarKetImg from '/images/MarketPageImg.webp'
import S from './MarketPage.styles'
import ProductService from '@/utils/services/ProductService'
const MarketPage = () => {
	const navigate = useNavigate()
	const OnCategoryClick = (path) => {
		navigate(path)
	}
	const ProductSum = ProductService.GetProductsSummaries(18)
	return (
		<S.Center>
			<S.ImgSection>
				<S.Box>
					<S.H1>
						믿을만한 <br />
						이웃 간 중고거래
					</S.H1>
					<S.Span>
						동네 주민들과 가깝고 따뜻한 거래를 <br />
						지금 경험해보세요.
					</S.Span>
					<S.MarketImg src={MarKetImg} />
				</S.Box>
			</S.ImgSection>

			<S.ListSection>
				<S.Title>중고거래 인기매물</S.Title>
				{ProductSum.products.map((item) => (
					<Article
						key={item.productId}
						src={item.ImageSrc}
						productName={item.productName}
						productPrice={item.productPrice}
						userLocation={item.userLocation}
						chattingCnt={item.chattingCnt}
						interestCnt={item.interestCnt}
					/>
				))}
				{/*물품리스트들은 Article태그를 map돌려서 보여줄거*/}
			</S.ListSection>
			<S.link
				onClick={() => {
					OnCategoryClick('/moreProducts')
				}}
			>
				인기매물 더보기
			</S.link>
			<S.KeyWordSection>
				<S.H3
					onClick={() => {
						OnCategoryClick('/moreProducts')
					}}
				>
					중고거래 인기검색어
				</S.H3>
				<S.Ul>
					<S.Li>알바</S.Li>
					<S.Li>순금</S.Li>
					<S.Li>나눔</S.Li>
					<S.Li>24K</S.Li>
					<S.Li>당근알바</S.Li>
					<S.Li>자전거</S.Li>
					<S.Li>아이폰</S.Li>
					<S.Li>냉장고</S.Li>
					<S.Li>의자</S.Li>
					<S.Li>중고차</S.Li>
				</S.Ul>
			</S.KeyWordSection>
		</S.Center>
	)
}

export default MarketPage
