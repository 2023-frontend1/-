import { JustifyBetween } from '@/styles/Common'
import styled from 'styled-components'

const RateSection = styled.section`
	width: 100%;
	padding-bottom: 30px;
	margin: 0;
	padding: 0;
`
const Ul = styled.ul`
	width: 100%;
	padding-inline-start: 0;
`
const Li = styled.li`
	background-color: ${({ theme }) => theme.Color.grayScale[100]};
	counter-increment: item;
	position: relative;
	border-bottom: 1px solid #${({ theme }) => theme.Color.grayScale[60]};
	width: 100%;
	${JustifyBetween}
`

const P = styled.p`
	display: inline-block;
	font-size: ${({ theme }) => {
		theme.FontSize.big
	}};
`
const S = {
	RateSection,
	Ul,
	Li,
	P,
}
export default S
