import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'
import S from './Haeder.styles'
import Logo from '/images/Logo.png'

const Header = () => {
	const navigate = useNavigate()
	const OnCategoryClick = (path) => {
		navigate(path)
	}

	return (
		<S.HeaderContainer>
			<S.HeaderNav>
				<S.HeaderUl>
					<S.Logo
						onClick={() => {
							OnCategoryClick('/')
						}}
						src={Logo}
						alt=""
					/>
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
				</S.HeaderUl>
			</S.HeaderNav>
			<S.SearchDiv>
				<form action="">
					<S.SearchInput
						type="text"
						placeholder="물품이나 동네를 검색해보세요"
					/>
				</form>
				<Button variant="first" size="small" shape="default">
					채팅하기
				</Button>
			</S.SearchDiv>
		</S.HeaderContainer>
	)
}
export default Header
