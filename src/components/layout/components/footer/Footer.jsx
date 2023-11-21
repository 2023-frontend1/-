import { Button } from '@/components'
import S from './Footer.styles'
import Insta from '/instagram.svg'
import Facebook from '/facebook.svg'
import Youtube from '/youtube.svg'
import Blog from '/images/blogging.png'

const Footer = () => {
	return (
		<S.Footer>
			<S.FooterWrapper>
				<S.FirstSection>
					<S.FooterNav>
						<ul>
							<S.NavList>중고거래</S.NavList>
							<S.NavList>동네업체</S.NavList>
							<S.NavList>당근알바</S.NavList>
							<S.NavList>부동산 직거래</S.NavList>
							<S.NavList>중고차 직거래</S.NavList>
						</ul>
						<ul>
							<S.NavList>파프리카비즈니스</S.NavList>
							<S.NavList>채팅하기</S.NavList>
						</ul>
						<ul>
							<S.NavList>자주 묻는 질문</S.NavList>
							<S.NavList>회사 소개</S.NavList>
							<S.NavList>인재 채용</S.NavList>
						</ul>
					</S.FooterNav>
					<div>
						<S.DownText>파프리카 앱 다운로드</S.DownText>
						<Button
							variant="second"
							size="medium"
							shape="small"
							style={{ marginRight: '16px' }}
						>
							App Store
						</Button>
						<Button variant="second" size="medium" shape="small">
							Google Play
						</Button>
					</div>
				</S.FirstSection>
				<S.SecondSection>
					<div>
						<ul>
							<li>
								<S.Point>
									<b>대표</b> 킹파프리카
								</S.Point>
								<span>
									<b>사업자번호</b> 375-87-000888
								</span>
							</li>
							<li>
								<b>직업정보제공사업 신고번호</b> J1200020200016
							</li>
							<li>
								<b>주소</b> 서울특별시 강남구 현익빌딩 4층
							</li>
							<li>
								<S.Point>
									<b>전화</b> 1544-0021
								</S.Point>
								<span>
									<b>고객문의</b> cs@paprikaservice.com
								</span>
							</li>
						</ul>
						<S.InquiryBox>
							<S.Link>제휴문의</S.Link>
							<S.Link>광고문의</S.Link>
							<S.Link>PR문의</S.Link>
							<S.Link>IR문의</S.Link>
						</S.InquiryBox>
					</div>
					<div>
						<S.IconImg src={Facebook} alt="" />
						<S.IconImg src={Insta} alt="" />
						<S.IconImg src={Youtube} alt="" />
						<S.IconImg src={Blog} alt="" />
					</div>
				</S.SecondSection>
				<S.LastSection>
					<S.Link>이용약관</S.Link>
					<S.Link>개인정보처리방침</S.Link>
					<S.Link>위치기반서비스 이용약관</S.Link>
					<S.Link>이용자보호 비전과 계획</S.Link>
					<S.Link>청소년보호정책</S.Link>
				</S.LastSection>
			</S.FooterWrapper>
		</S.Footer>
	)
}

export default Footer
