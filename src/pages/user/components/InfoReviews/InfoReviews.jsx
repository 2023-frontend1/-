import { ImageBox } from '@/components'
import { DirectionColumn } from '@/styles/Common'
import styled from 'styled-components'

const InfoReviews = () => {
	return (
		<S.ReviewList>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ImageBox
						boxshape={'round'}
						size={'smallUser'}
						src={'https://source.unsplash.com/user/USERNAME'}
					/>
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>
					코adfskhadsljkfhadskjhfjkladshfkljhadskjlfhlkajdshfkljhdasklfhkadjlshfkljadshl멘트
				</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ImageBox
						boxshape={'round'}
						size={'smallUser'}
						src={'https://source.unsplash.com/user/USERNAME'}
					/>
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>
					코adfskhadsljkfhadskjhfjkladshfkljhadskjlfhlkajdshfkljhdasklfhkadjlshfkljadshl멘트
				</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ImageBox
						boxshape={'round'}
						size={'smallUser'}
						src={'https://source.unsplash.com/user/USERNAME'}
					/>
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>
					코adfskhadsljkfhadskjhfjkladshfkljhadskjlfhlkajdshfkljhdasklfhkadjlshfkljadshl멘트
				</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ImageBox
						boxshape={'round'}
						size={'smallUser'}
						src={'https://source.unsplash.com/user/USERNAME'}
					/>
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>
					코adfskhadsljkfhadskjhfjkladshfkljhadskjlfhlkajdshfkljhdasklfhkadjlshfkljadshl멘트
				</S.Content>
			</S.ReviewOne>
			<S.ReviewOne>
				<S.ProfileBlock>
					<ImageBox
						boxshape={'round'}
						size={'smallUser'}
						src={'https://source.unsplash.com/user/USERNAME'}
					/>
					<S.NickName>
						닉네임 <S.Address> 주소</S.Address>{' '}
					</S.NickName>
				</S.ProfileBlock>

				<S.Content>
					코adfskhadsljkfhadskjhfjkladshfkljhadskjlfhlkajdshfkljhdasklfhkadjlshfkljadshl멘트
				</S.Content>
			</S.ReviewOne>
		</S.ReviewList>
	)
}

export default InfoReviews

const ReviewList = styled.ul`
	${DirectionColumn}
	width: 100%;
	justify-content: start;
	align-items: start;
	gap: 20px;
`

const ReviewOne = styled.li`
	${DirectionColumn}
	width: 100%;
	margin-bottom: 15px;
	padding-bottom: 25px;
	justify-content: center;
	align-items: start;
	gap: 8px;
	border-bottom: 0.1px solid ${({ theme }) => theme.Color.grayScale[60]};
`

const ProfileBlock = styled.div`
	padding: 0;
	display: flex;
	justify-content: start;
	align-items: center;
	text-align: center;
	gap: 15px;
`

const NickName = styled.span`
	font-size: ${({ theme }) => theme.FontSize.small};
`
const Address = styled.span`
	margin-left: 10px;
	font-size: ${({ theme }) => theme.FontSize.tiny};
	font-weight: ${({ theme }) => theme.FontWeight.thin};
`

const Content = styled.p`
	margin: 0;
	padding: 0;
	font-size: ${({ theme }) => theme.FontSize.tiny};
`

const S = { ReviewList, ReviewOne, NickName, Address, Content, ProfileBlock }
