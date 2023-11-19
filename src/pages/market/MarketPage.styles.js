import { AlignCenter, FlexCenter } from '@/styles/Common'
import styled from 'styled-components'

const Center = styled.div`
	${AlignCenter}
	flex-direction: column;
	width: 100%;
`
const ImgSection = styled.div`
	${FlexCenter}
	flex-direction: column;
	width: 100vw;
	padding-top: 100px;
	background-color: #fff1aa;
	height: 285px;
`
const Box = styled.div`
	position: relative;
	height: 100%;
	box-sizing: border-box;
	padding-top: 50px;
	max-width: 768px;
	margin: 0 auto;
`
const H1 = styled.h1`
	line-height: 1.5;
	font-size: 34px;
	letter-spacing: -0.32px;
	width: 768px;
`
const Span = styled.span`
	line-height: 1.32;
	font-size: 18px;
	letter-spacing: -0.18px;
	margin-top: 16px;
	display: block;
`
const ListSection = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	padding-top: 64px;
	width: 757px;
	gap: 22px;
`
const Title = styled.h1`
	text-align: center;
	font-size: 32px;
	line-height: 43.2px;
	width: 100%;
`
const link = styled.div`
	cursor: pointer;
	text-decoration: underline;
	margin-bottom: 104px;
	font-size: 18px;
	line-height: 1.5;
	letter-spacing: -0.3px;
	font-weight: bold;
`
const KeyWordSection = styled.div`
	${FlexCenter}
	flex-direction: row;
	background-color: #e5e1e1eb;
	width: 100%;
	height: 104px;
`

const H3 = styled.h3`
	cursor: pointer;
	text-decoration: underline;
	color: #212529;
	font-size: 18px;
	line-height: 1.5;
	letter-spacing: -0.3px;
`
const Li = styled.li`
	cursor: pointer;
	margin: 8px;
	color: #212529;
`

const Ul = styled.ul`
	display: flex;
	flex-direction: row;
`
const MarketImg = styled.img`
	width: 416px;
	height: 315px;
	position: absolute;
	top: -32px;
	right: 30px;
`

const S = {
	Center,
	ImgSection,
	Box,
	H1,
	Span,
	ListSection,
	link,
	KeyWordSection,
	Ul,
	Li,
	H3,
	MarketImg,
	Title,
}
export default S
