import { AlignCenter, FlexCenter } from '@/styles/Common'
import styled from 'styled-components'

const Container = styled.div`
	${FlexCenter}
	width: 100vw;
	margin-top: 60px;
	background-color: red;
	overflow: hidden;
`

const CenterBox = styled.div`
	width: 50%;
	height: 100%;
	background-color: brown;
`
const InfosTabContainer = styled.div`
	width: 100%;
	height: 150px;
	${AlignCenter}
	border-bottom: 2px solid ${({ theme }) => theme.Color.grayScale[80]};
	background-color: blue;
	gap: 15px;
`

const InfosTab = styled.div`
	width: 20%;
	height: 100px;
	position: relative;
	font-size: ${({ theme }) => theme.FontSize.small};
	text-align: center;

	background-color: purple;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 5px;
		background-color: ${({ theme }) => theme.Color.grayScale[80]};
		transform: translateX(-10px) translateY(100px);
	}
`

const S = {
	Container,
	InfosTabContainer,
	InfosTab,
	CenterBox,
}

export default S
