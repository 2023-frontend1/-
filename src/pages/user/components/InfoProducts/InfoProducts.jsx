import { Article } from '@/components'
import S from './InfoProduts.styles'

const InfoProducts = () => {
	return (
		<>
			<S.CardListSection>
				<Article
					productName={'가방'}
					productPrice={'10,000'}
					userLocation={'서울시'}
					chattingCnt={10}
					interestCnt={30}
					src={'https://source.unsplash.com/user/USERNAME'}
					onClick={() => {
						alert('날라간다.')
					}}
				/>
				<Article
					productName={'가방'}
					productPrice={'10,000'}
					userLocation={'서울시'}
					chattingCnt={10}
					interestCnt={30}
					src={'https://source.unsplash.com/user/USERNAME'}
					onClick={() => {
						alert('날라간다.')
					}}
				/>
				<Article
					productName={'가방'}
					productPrice={'10,000'}
					userLocation={'서울시'}
					chattingCnt={10}
					interestCnt={30}
					src={'https://source.unsplash.com/user/USERNAME'}
					onClick={() => {
						alert('날라간다.')
					}}
				/>
				<Article
					productName={'가방'}
					productPrice={'10,000'}
					userLocation={'서울시'}
					chattingCnt={10}
					interestCnt={30}
					src={'https://source.unsplash.com/user/USERNAME'}
					onClick={() => {
						alert('날라간다.')
					}}
				/>
			</S.CardListSection>
		</>
	)
}

export default InfoProducts
