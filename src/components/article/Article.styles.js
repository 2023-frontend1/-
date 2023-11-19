import styled from 'styled-components'

const H2 = styled.h2`
	max-width: 100%;
	font-size: 16px;
	letter-spacing: -0.02px;
	color: #212529;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-bottom: 4px;
	line-height: 1.5;
	font-weight: normal;
`
const ArticleBox = styled.article`
	width: 223px;
	margin-bottom: 56px;
	padding: 0;
`
const PriceDiv = styled.div`
	font-size: 15px;
	font-weight: 700;
	line-height: 1.5;
	margin-bottom: 4px;
`
const LocationDiv = styled.div`
	font-size: 13px;
	color: #212529;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-bottom: 4px;
	line-height: 1.5;
`

const Span = styled.span`
	color: #868e96;
	font-size: 13px;
`
const S = {
	ArticleBox,
	H2,
	PriceDiv,
	LocationDiv,
	Span,
}

export default S
