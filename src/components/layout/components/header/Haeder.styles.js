import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	position: fixed;
	top: 0px;
	z-index: 100;
`

const HeaderNav = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 100px;
`
const SearchDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 140px;
`
const SearchInput = styled.input`
	border: none;
	background-color: #eef0f4;
	border-radius: 8px;
	width: 264px;
	height: 38px;
	padding-left: 12px;
	margin-right: 12px;
`
const Link = styled.li`
	margin-right: 28px;
	font-size: 18px;
	font-weight: 700;
	color: #3c4047;
	&:hover {
		color: gray;
	}
`
const Logo = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 28px;
`
const S = {
	HeaderContainer,
	HeaderNav,
	SearchDiv,
	SearchInput,
	Link,
	Logo,
}
export default S
