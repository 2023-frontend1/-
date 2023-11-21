import { ImageBox } from '@/components'
import S from './UserPage.styles'
import { InfoProducts } from './components'

const UserPage = () => {
	return (
		<S.Container>
			<S.CenterBox>
				<S.UserProfileSection>
					<ImageBox
						boxshape="round"
						size="largeUser"
						src="https://source.unsplash.com/user/USERNAME"
					/>
					<S.UserInfoTextsArea>
						<S.UserSignificantInfoText>
							fullmoon
							<S.UserAddress>전주시 완산구 중화산동2가</S.UserAddress>
						</S.UserSignificantInfoText>
						<S.UserEvaluationInfoTexts>
							<li>
								매너온도
								<span> 36.5 </span>
							</li>
							<li>
								재거래희망률
								<span>100%</span>
							</li>
						</S.UserEvaluationInfoTexts>
					</S.UserInfoTextsArea>
				</S.UserProfileSection>

				<S.UserFilterSection>
					<S.UserFilterList>
						<S.EvaluationItem>판매 물풀 (1)</S.EvaluationItem>
						<S.EvaluationItem>거래 후기 (1)</S.EvaluationItem>
						<S.EvaluationItem>매너 칭찬</S.EvaluationItem>
					</S.UserFilterList>
				</S.UserFilterSection>

				<InfoProducts />
			</S.CenterBox>
		</S.Container>
	)
}

export default UserPage
