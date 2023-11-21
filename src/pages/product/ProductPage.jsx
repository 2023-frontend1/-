import { ImageBox } from '@/components'
import S from './ProductPage.styles'

const ProductPage = () => {
	return (
		<S.Box>
			<S.MainWrap>
				<S.ImageWrap>
					<S.LeftBtn />
					<ImageBox
						boxshape={'default'}
						size={'largeProduct'}
						src={'https://source.unsplash.com/random'}
					/>
					<S.RightBtn />
				</S.ImageWrap>

				<S.LinkProfile>
					<S.LeftProfileWrap>
						<ImageBox
							boxshape={'round'}
							size={'smallUser'}
							src={'https://source.unsplash.com/random'}
						/>
						<S.InfoWrap>
							<S.NickNameDiv>nickName</S.NickNameDiv>
							<S.LocationDiv>userLocation</S.LocationDiv>
						</S.InfoWrap>
					</S.LeftProfileWrap>
					<S.RightProfileWrap>
						<S.TampWrap>
							<S.TampText>매너온도</S.TampText>
							<S.TampTamp>
								37.5
								<S.TampSpan>°C</S.TampSpan>
							</S.TampTamp>
							<S.TampBox>
								<S.TapmBar></S.TapmBar>
							</S.TampBox>
							<S.TampFace></S.TampFace>
						</S.TampWrap>
					</S.RightProfileWrap>
				</S.LinkProfile>
				<S.DescriptWrap>
					<S.DescriptTitle>상품 제목</S.DescriptTitle>
					<S.DescriptCategory>카테고리 5일전</S.DescriptCategory>
					<S.DescriptPrice>상품가격 데이터에서</S.DescriptPrice>
					<S.DescriptContent>
						상품에 대한 설명을 적는 공간
						<br />
						상품에 대한 설명을 적는 공간
						<br />
						상품에 대한 설명을 적는 공간
						<br />
						상품에 대한 설명을 적는 공간
						<br />
						상품에 대한 설명을 적는 공간
						<br />
						상품에 대한 설명을 적는 공간
						<br />
					</S.DescriptContent>
					<S.DescriptCount>관심 36 ∙ 채팅 41 ∙ 조회 1259</S.DescriptCount>
				</S.DescriptWrap>
				<S.MoreProductWrap>
					<S.MoreProductHeader>당근 인기중고</S.MoreProductHeader>
					<S.MoreProductLinkWarp>
						<S.MoreProductLink>더 구경하기</S.MoreProductLink>
					</S.MoreProductLinkWarp>
					<S.MoreProductListWrap></S.MoreProductListWrap>
				</S.MoreProductWrap>
			</S.MainWrap>
		</S.Box>
	)
}

export default ProductPage
