import S from './InfoRates.styles'

const MannerComment = [
	'친절하고 매너가 좋아요.',
	' 시간 약속을 잘 지켜요.',
	' 응답이 빨라요.',
	' 제가 있는 곳까지 와서 거래했어요.',
	' 물품상태가 설명한 것과 같아요.',
	'좋은 물품을 저렴하게 판매해요.',
	' 물품설명이 자세해요.',
	' 나눔을 해주셨어요.',
]

const InfoRates = () => {
	return (
		<S.RateSection>
			<S.Ul>
				{MannerComment.map((val, idx) => {
					return (
						<S.Li key={idx}>
							<S.P>
								{idx + 1}. {val}
							</S.P>
							<S.P>(칭찬인원) 명</S.P>
						</S.Li>
					)
				})}
			</S.Ul>
		</S.RateSection>
	)
}
export default InfoRates
