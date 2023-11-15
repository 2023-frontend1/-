import S from './Haeder.styles'
import Logo from '/images/Logo.png'

const Header = () => {
	return (
		<S.HeaderContainer>
			<a href="">
				<S.Logo src={Logo} alt="" />
			</a>
			<nav>
				<S.HeaderNav>
					<li>
						<S.Link href="#">중고거래</S.Link>
					</li>
					<li>
						<S.Link href="#">동네업체</S.Link>
					</li>
					<li>
						<S.Link href="#">알바</S.Link>
					</li>
					<li>
						<S.Link href="#">부동산 직거래</S.Link>
					</li>
					<li>
						<S.Link href="#">중고차 직거래</S.Link>
					</li>
				</S.HeaderNav>
			</nav>
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
