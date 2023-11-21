import styled from 'styled-components'
import { JustifyBetween, DirectionColumn } from '@/styles/Common'

const Footer = styled.footer`
	border-top: 1px solid ${({ theme }) => theme.Color.grayScale[80]};
	width: 100vw;
	background-color: ${({ theme }) => theme.Color.grayScale[100]};
`
const FooterWrapper = styled.div`
	max-width: 46.8rem;
	margin: 0 auto;
	${DirectionColumn}
`
const FirstSection = styled.section`
	padding: 3.6rem 0;
	${JustifyBetween}
`
const FooterNav = styled.nav`
	display: flex;
`
const NavList = styled.li`
	margin-bottom: 1.6rem;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`
const DownText = styled.p`
	font-weight: ${({ theme }) => theme.FontWeight.bold};
`
const IconImg = styled.img`
	width: 25px;
	height: 25px;
	margin-right: 1.6rem;
	cursor: pointer;
	&:hover {
		opacity: 0.6;
	}
`
const SecondSection = styled.section`
	${JustifyBetween}
	padding: 2.4rem 0;
	border-top: 1px solid ${({ theme }) => theme.Color.grayScale[80]};
`
const InquiryBox = styled.div`
	margin-left: 40px;
`
const LastSection = styled.section`
	padding-bottom: 6rem;
	margin-left: 40px;
`
const Link = styled.a`
	margin-right: 1.2rem;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`
const Point = styled.span`
	&::after {
		content: ' | ';
	}
`
const S = {
	Footer,
	FooterWrapper,
	FirstSection,
	FooterNav,
	NavList,
	DownText,
	IconImg,
	SecondSection,
	InquiryBox,
	Link,
	LastSection,
	Point,
}

export default S
