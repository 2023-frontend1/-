import {
	AlignCenter,
	DirectionColumn,
	FlexCenter,
	JustifyBetween,
} from '@/styles/Common'
import styled from 'styled-components'

const Container = styled.div`
	${FlexCenter}
	width: 100vw;
	padding-top: 80px;
	background-color: ${({ theme }) => theme.Color.grayScale[100]};
	overflow: hidden;
	color: ${({ theme }) => theme.Color.grayScale[0]};
`

const CenterBox = styled.div`
	${FlexCenter}
	${DirectionColumn}
	width: 757px;
	height: 100%;
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

const UserProfileSection = styled.section`
	display: flex;
	width: 100%;
	justify-content: start;
	align-items: start;
	gap: 15px;
`

const UserInfoTextsArea = styled.div`
	${DirectionColumn}
	width: 80%;
	margin: 0%;
	justify-content: start;
`

const UserSignificantInfoText = styled.h2`
	margin: 0%;
	padding: 0px 0px 0px 0px;
	width: 100%;
`
const UserEvaluationInfoTexts = styled.ul`
	margin: 0%;
	padding: 0%;
	display: flex;
	justify-content: start;
	width: 100%;
	gap: 10px;
	font-size: ${({ theme }) => theme.FontSize.tiny};
	color: ${({ theme }) => theme.Color.grayScale[60]};
	padding: 10px;
`

const EvaluationItem = styled.li`
	color: ${({ theme }) => theme.Color.grayScale[60]};
`

const UserFilterSection = styled.section`
	margin-top: 20px;
	margin-bottom: 20px;
	width: 100%;
`

const UserFilterList = styled.ul`
	border-bottom: 1px solid #e9ecef;
	padding-bottom: 10px;
	padding: 0;
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 20px;
	padding: 0 0 15px 20px;
	margin: 40px 0;
	font-size: ${({ theme }) => theme.FontSize.small};
	color: ${({ theme }) => theme.Color.grayScale[60]};
`

const UserAddress = styled.span`
	margin-left: 10px;
	font-size: ${({ theme }) => theme.FontSize.small};
	font-weight: ${({ theme }) => theme.FontWeight.small};
`

const CardListSection = styled.section`
	${FlexCenter}
	${JustifyBetween}
	flex-wrap: wrap;
	gap: 10px;
	width: 100%;
`

const S = {
	Container,
	InfosTabContainer,
	InfosTab,
	CenterBox,
	UserProfileSection,
	UserInfoTextsArea,
	UserSignificantInfoText,
	UserEvaluationInfoTexts,
	EvaluationItem,
	UserFilterSection,
	UserFilterList,
	UserAddress,
	CardListSection,
}

export default S
