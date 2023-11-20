import { JustifyBetween } from '@/styles/Common'
import styled from 'styled-components'

const RateSection = styled.section`
	width: 100%;
	padding-bottom: 30px;
	margin: 0;
	padding: 0;
`
const Ul = styled.ul`
	counter-reset: item;
	width: 100%;
	display: block;
`
const Li = styled.li`
	background-color: red;
	list-style-type: none;
	counter-increment: item;
	position: relative;
	padding: 16px 20px;
	border-bottom: 1px solid #e9ecef;
	width: 100%;
	${JustifyBetween}
`

const P = styled.p`
	display: inline-block;
	font-size: 15px;
`
const S = {
	RateSection,
	Ul,
	Li,
	P,
}
export default S
