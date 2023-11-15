import S from './Haeder.styles'
import Logo from '/images/Logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()
	const OnCategoryClick = (path) => {
		navigate(path)
	}

	return (
		<S.HeaderContainer>
			<S.Logo
				onClick={() => {
					OnCategoryClick('/')
				}}
				src={Logo}
				alt=""
			/>
			<S.HeaderNav>
				<S.Link
					onClick={() => {
						OnCategoryClick('/market')
					}}
				>
					{' '}
					중고거래
				</S.Link>
				<S.Link
					onClick={() => {
						OnCategoryClick('/company')
					}}
				>
					동네업체
				</S.Link>
				<S.Link
					onClick={() => {
						OnCategoryClick('/part-time')
					}}
				>
					알바
				</S.Link>
				<S.Link
					onClick={() => {
						OnCategoryClick('/estate')
					}}
				>
					부동산 직거래
				</S.Link>
				<S.Link
					onClick={() => {
						OnCategoryClick('/used-car')
					}}
				>
					중고차 직거래
				</S.Link>
			</S.HeaderNav>
			<S.SearchDiv>
				<form action="">
					<S.SearchInput
						type="text"
						placeholder="물품이나 동네를 검색해보세요"
					/>
				</form>
				<S.Button>채팅하기</S.Button>
			</S.SearchDiv>
		</S.HeaderContainer>
	)
}
export default Header
