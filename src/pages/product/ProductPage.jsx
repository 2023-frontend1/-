import { ImageBox } from '@/components'
import S from './ProductPage.styles'
import { useParams } from 'react-router-dom'
import ProductService from '@/utils/services/ProductService'

const ProductPage = () => {
	let { productId } = useParams()
	const Product = ProductService.GetProductDetailById(productId)
	return (
		<S.Box>
			<S.MainWrap>
				<S.ImageWrap>
					<S.LeftBtn />
					<ImageBox
						boxshape={'default'}
						size={'largeProduct'}
						src={Product.ImageSrcs[0]}
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
							<S.NickNameDiv>{Product.userNickname}</S.NickNameDiv>
							<S.LocationDiv>{Product.userLocation}</S.LocationDiv>
						</S.InfoWrap>
					</S.LeftProfileWrap>
					<S.RightProfileWrap>
						<S.TampWrap>
							<S.TampText>매너온도</S.TampText>
							<S.TampTamp>
								{Product.mannerTemperature}
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
					<S.DescriptTitle>{Product.productName}</S.DescriptTitle>
					<S.DescriptCategory>카테고리 5일전</S.DescriptCategory>
					<S.DescriptPrice>{Product.productPrice}원</S.DescriptPrice>
					<S.DescriptContent>{Product.productDetail}</S.DescriptContent>
					<S.DescriptCount>
						관심 {Product.interestCnt} ∙ 채팅 {Product.chattingCnt}
					</S.DescriptCount>
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
