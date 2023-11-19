import { ImageBox } from '@/components'
import { AlignCenter, DirectionColumn, FlexCenter } from '@/styles/Common'
import styled from 'styled-components'

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
`

const UserSignificantInfoText = styled.h2`
	margin: 0%;
	padding: 0px 0px 0px 0px;
	width: 100%;
`
const UserEvaluationInfoTexts = styled.ul`
	margin: 0%;
	display: flex;
	justify-content: start;
	width: 100%;
	gap: 10px;
`

const UserFilterSection = styled.section`
	margin-top: 20px;
	margin-bottom: 20px;
`

const UserFilterList = styled.ul`
	list-style-type: none;
	border-bottom: 1px solid #e9ecef;
	padding-bottom: 10px;
	margin: 0;
	padding: 0;
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 40px;
	display: flex;
	justify-content: start;
	gap: 10px;
`
const CardListSection = styled.section``

const CardDesc = styled.div`
	margin-top: 12px;
	display: block;
	color: black;
	margin: 0;
	padding: 0;
`

const UserPage = () => {
	return (
		<S.Container>
			<S.CenterBox>
				<UserProfileSection>
					<ImageBox
						boxshape="round"
						size="largeUser"
						src="https://source.unsplash.com/user/USERNAME"
					/>
					<UserInfoTextsArea>
						<UserSignificantInfoText>
							fullmoon
							<span>전주시 완산구 중화산동2가</span>
						</UserSignificantInfoText>
						<UserEvaluationInfoTexts>
							<li>
								매너온도
								<span>36.5</span>
							</li>
							<li>
								재거래희망률
								<span>100%</span>
							</li>
						</UserEvaluationInfoTexts>
					</UserInfoTextsArea>
				</UserProfileSection>
				<div>
					<UserFilterSection>
						<UserFilterList>
							<li>
								<span>판매 물풀(1)</span>
							</li>
							<li>
								<span>거래 후기(1)</span>
							</li>
							<li>
								<span>매너 칭찬</span>
							</li>
						</UserFilterList>
					</UserFilterSection>

					<CardListSection>
						<div
							onClick={() => {
								console.log('product 페이지로 날라간다.')
							}}
						>
							<ImageBox
								boxshape="default"
								size="smallProduct"
								src="https://source.unsplash.com/user/USERNAME"
							/>
							<CardDesc>
								<h2>남성 트렌치코트 판매 105</h2>
								<div>40,000원</div>
								<div>전북 전주시 완주군</div>
								<div>
									<span>관심 5</span>
									<span>채팅 0</span>
								</div>
							</CardDesc>
						</div>
					</CardListSection>
				</div>
			</S.CenterBox>
		</S.Container>
	)
}

export default UserPage

const Container = styled.div`
	${FlexCenter}
	width: 100vw;
	margin-top: 60px;
	background-color: red;
	overflow: hidden;
	color: ${({ theme }) => theme.Color.grayScale[100]};
`

const CenterBox = styled.div`
	${FlexCenter}
	${DirectionColumn}
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
