import styled from 'styled-components'

const HeaderContainer = styled.div`
	width: 100vw;
	position: fixed;
	top: 0px;
	height: 68px;
	background-color: white;
	z-index: 100;
	display: flex;
	justify-content: center;
`

const HeaderNav = styled.div`
	width: 910px;
`

const HeaderUl = styled.ul`
	display: flex;
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
	HeaderUl,
	SearchDiv,
	SearchInput,
	Link,
	Logo,
}
export default S
