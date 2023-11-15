import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	position: fixed;
	top: 2px;
	z-index: 100;
`

const HeaderNav = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
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
const Link = styled.a`
	margin-right: 28px;
	font-size: 18px;
	font-weight: 700;
	color: #3c4047;
	&:hover {
		color: gray;
	}
`
const Logo = styled.img`
	background-image: url('../images/logo.png');
	width: 100px;
	height: 100px;
	z-index: 200;
`
const Button = styled.button`
	border: 1px solid #b1b3b652;
	font-weight: 700;
	background-color: white;
	&:hover {
		background-color: #eef0f4;
	}
`
const S = {
	HeaderContainer,
	HeaderNav,
	SearchDiv,
	SearchInput,
	Link,
	Logo,
	Button,
}
export default S
