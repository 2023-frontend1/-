import { ImageBox } from '@/components'

const InfoReviers = () => {
	return (
		<S.ReviewList>
			<S.ReviewOne>
				<ImageBox
					boxshape={round}
					size={'smallUser'}
					src={'https://source.unsplash.com/user/USERNAME'}
				/>
				<S.NickName>
					닉네임
					<S.Address> 주소</S.Address>
				</S.NickName>
				<S.Content></S.Content>
			</S.ReviewOne>
		</S.ReviewList>
	)
}

export default InfoReviers

const ReviewList = styled.ul`
	display: flex;
	width: 100%;
	justify-content: start;
	align-items: start;
	gap: 15px;
`

const ReviewOne = styled.li`
	${DirectionColumn}
	width: 80%;
	margin: 0%;
	justify-content: start;
`

const NickName = sytled.div`
`
const Address = styeld.div``

const Content = styeld.p``

const S = { ReviewList, ReviewOne, NickName, Address, Content }
