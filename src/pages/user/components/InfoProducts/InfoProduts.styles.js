import { FlexCenter, JustifyBetween } from '@/styles/Common'
import styled from 'styled-components'

const CardListSection = styled.section`
	${FlexCenter}
	${JustifyBetween}
	flex-wrap: wrap;
	gap: 10px;
	width: 100%;
`

const S = {
	CardListSection,
}
export default S
