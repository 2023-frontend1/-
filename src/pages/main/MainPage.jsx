import S from './MainPage.styles'
import { Button } from '@/components'
import MainTopImg from '/images/MainTopImg.png'
import MainSecondImg from '/images/MainSecondImg.webp'
import MainThirdImg from '/images/MainThirdImg.webp'
import MainFourthImg from '/images/MainFourthImg.webp'
import MainLastImg from '/images/MainLastImg.webp'
import IconSvg1 from '/Icon1.svg'
import IconSvg2 from '/Icon2.svg'
import IconSvg3 from '/Icon3.svg'

const MainPage = () => {
	return (
		<>
			<S.MainTop>
				<S.MainTopWrapper>
					<S.MainTitle>
						당신 근처의
						<br></br>
						지역 생활 커뮤니티
					</S.MainTitle>
					<S.Content>
						동네라서 가능한 모든 것<br></br>
						당근에서 가까운 이웃과 함께해요
					</S.Content>
					<br></br>
					<div>
						<Button
							variant="primary"
							size="large"
							shape="medium"
							style={{ marginRight: '10px' }}
						>
							Google Play
						</Button>
						<Button variant="primary" size="large" shape="medium">
							Google Play
						</Button>
					</div>
					<div>
						<S.MainTopImg src={MainTopImg} alt="" />
					</div>
				</S.MainTopWrapper>
			</S.MainTop>
			<S.MainEven>
				<S.Wrapper>
					<S.Img src={MainSecondImg} alt="" />
					<div>
						<S.ContentTitle>중고거래</S.ContentTitle>
						<S.Title>
							믿을만한
							<br></br>
							이웃 간 중고거래
						</S.Title>
						<S.Content>
							동네 주민들과 가깝고 따뜻한 거래를
							<br></br>
							지금 경험해보세요
						</S.Content>
						<div>
							<Button
								variant="second"
								size="medium"
								shape="small"
								style={{ marginRight: '10px' }}
							>
								인기 매물 보기
							</Button>
							<Button variant="second" size="medium" shape="small">
								믿을 수 있는 중고거래
							</Button>
						</div>
					</div>
				</S.Wrapper>
			</S.MainEven>
			<S.MainThird>
				<S.Wrapper>
					<div>
						<S.ContentTitle>동네생활</S.ContentTitle>
						<S.Title>
							이웃만 아는
							<br></br>
							동네 정보와 이야기
						</S.Title>
						<S.Content>
							우리동네의 다양한 정보와 이야기를
							<br></br>
							공감과 댓글로 나누어요.
						</S.Content>
						<S.StoryList>
							<S.ListItem>
								<img src={IconSvg1} alt="" />
								<S.StoryTitle>동네모임</S.StoryTitle>
								<S.StoryContent>
									근처 이웃들과 동네
									<br></br>
									이야기를 해보세요.
								</S.StoryContent>
							</S.ListItem>
							<S.ListItem>
								<img src={IconSvg2} alt="" />
								<S.StoryTitle>동네질문</S.StoryTitle>
								<S.StoryContent>
									궁금한게 있을 땐<br></br>
									이웃에 물어보세요.
								</S.StoryContent>
							</S.ListItem>
							<S.ListItem>
								<img src={IconSvg3} alt="" />
								<S.StoryTitle>동네분실센터</S.StoryTitle>
								<S.StoryContent>
									무언가를 잃어버렸다면
									<br></br>
									글을 올려보세요.
								</S.StoryContent>
							</S.ListItem>
						</S.StoryList>
					</div>
					<S.Img src={MainThirdImg}></S.Img>
				</S.Wrapper>
			</S.MainThird>
			<S.MainEven>
				<S.Wrapper>
					<S.Img src={MainFourthImg} alt="" />
					<div>
						<S.ContentTitle>알바</S.ContentTitle>
						<S.Title>
							걸어서 10분!
							<br></br>
							동네 알바 구하기
						</S.Title>
						<S.Content>
							당근하듯 쉽고, 편하게
							<br></br>
							당근 알바로 동네 알바를 구할 수 있어요.
						</S.Content>
						<Button variant="second" size="medium" shape="small">
							내근처 알바 보기
						</Button>
					</div>
				</S.Wrapper>
			</S.MainEven>
			<S.MainLast>
				<S.Wrapper>
					<div>
						<S.ContentTitle>동네업체</S.ContentTitle>
						<S.Title>
							내 근처에서 찾는
							<br></br>
							동네업체
						</S.Title>
						<S.Content>
							이웃들의 추천 후기를 확인하고
							<br></br>
							동네 곳곳의 업체들을 찾을 수 있어요.
						</S.Content>
						<Button variant="second" size="medium" shape="small">
							당근 동네업체 보기
						</Button>
					</div>
					<S.Img src={MainLastImg} alt="" />
				</S.Wrapper>
			</S.MainLast>
		</>
	)
}

export default MainPage
