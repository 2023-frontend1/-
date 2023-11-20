import { AlignCenter, DirectionColumn, FlexCenter } from '@/styles/Common'
import styled from 'styled-components'
const Box = styled.div`
	${FlexCenter}
	width: 100vw;
`
const MainWrap = styled.article`
	margin-top: 68x;
	padding-bottom: 0;
	width: 730px;
	height: 100%;
	${FlexCenter}
	${DirectionColumn}
	align-items: center;
`
const LeftBtn = styled.button`
	padding: 0px;
	position: absolute;
	left: -20px;
	top: 240px;
	border: none;
	z-index: 99;
	background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-4c0e713bfa2cd12bd959e6dd9ef456cd6fc094953c41e605f6b9a59bc1680686.svg)
		no-repeat;
	outline: none;
	width: 11px;
	height: 21px;
	text-indent: -9999px;
`
const RightBtn = styled.button`
	padding: 0px;
	width: 11px;
	height: 21px;
	position: absolute;
	right: -20px;
	top: 240px;
	border: none;
	background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-134c53f44716c3bef227ec30da385b4b09c9c068d339a617a23093718f379d02.svg)
		no-repeat;
`
const ImageWrap = styled.div`
	position: relative;
	margin-top: 100px;
	width: 729px;
	height: 500px;
`
const LinkProfile = styled.a`
	width: 100%;
	text-decoration: none;
	display: block;
	margin-top: 25px;
	padding-bottom: 23px;
	position: relative;
	border-bottom: 1px solid #e9ecef;
`
const LeftProfileWrap = styled.div`
	${AlignCenter}
	&:hover {
		cursor: pointer;
	}
`
const InfoWrap = styled.div`
	margin-left: 5px;
`
const NickNameDiv = styled.div`
	font-size: 15px;
	font-weight: 600;
	line-height: 1.5;
	letter-spacing: -0.6px;
	color: #212529;
	&:hover {
		text-decoration-line: underline;
	}
`
const LocationDiv = styled.div`
	font-size: 13px;
	line-height: 1.46;
	letter-spacing: -0.6px;
	color: #212529;
`
const RightProfileWrap = styled.div`
	position: absolute;
	right: 0;
	padding-right: 36px;
`
const TampWrap = styled.dl`
	display: block;
	width: 100px;
`
const TampText = styled.dt`
	position: absolute;
	top: 0px;
	right: 0px;
	font-size: 12px;
	line-height: 1;
	letter-spacing: -0.6px;
	color: #868e96;
`
const TampTamp = styled.dd`
	color: #1561a9;
	position: absolute;
	font-size: 16px;
	font-weight: bold;
	line-height: 1;
	letter-spacing: -0.5px;
	margin-top: 1px;
	width: 100px;
	text-align: right;
	top: -30px;
	right: 30px;
`
const TampFace = styled.div`
	background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png)
		no-repeat;
	background-size: 29px 147px;
	background-position: 0px -75px;
	width: 24px;
	height: 24px;
	position: absolute;
	top: -31px;
	right: -5px;
`
const TampSpan = styled.span``
const TampBox = styled.div`
	clear: both;
	display: block;
	width: 100px;
	background-color: #e9ecef;
	height: 4px;
	border-radius: 100px;
	position: relative;
	margin-top: 24px;
	top: -30px;
`
const TapmBar = styled.div`
	width: 38%;
	background-color: #1561a9;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 4px;
`
const DescriptWrap = styled.section`
	width: 100%;
`
const DescriptTitle = styled.h1`
	font-size: 20px;
	font-weight: 600;
	line-height: 1.5;
	letter-spacing: -0.6px;
	margin: 0px;
	padding-top: 40px;
`
const DescriptCategory = styled.p`
	margin-top: 4px;
	font-size: 13px;
	line-height: 1.46;
	letter-spacing: -0.6px;
	color: #868e96;
`
const DescriptPrice = styled.p`
	margin-top: 4px;
	line-height: 1.76;
	letter-spacing: -0.6px;
	font-size: 17px;
	font-weight: 600;
`
const DescriptContent = styled.p`
	font-size: 17px;
	line-height: 1.6;
	letter-spacing: -0.6px;
	margin: 16px 0;
	word-break: break-all;
`
const DescriptCount = styled.p`
	font-size: 13px;
	line-height: 1.46;
	letter-spacing: -0.6px;
	color: #868e96;
`
const MoreProductWrap = styled.section`
	width: 677px;
	margin: 0 auto;
	padding-top: 32px;
	position: relative;
`
const MoreProductHeader = styled.h3`
	font-size: 18px;
	text-align: left;
	line-height: 1.47;
	letter-spacing: -0.6px;
	font-weight: 600;
	padding-bottom: 0;
	margin-bottom: 30px;
`
const MoreProductLinkWarp = styled.div`
	position: absolute;
	top: 32px;
	right: 0;
	text-align: right;
`
const MoreProductLink = styled.a`
	font-size: 15px;
	line-height: 1.4;
	letter-spacing: -0.6px;
	text-decoration: none;
	color: ${({ theme }) => theme.Color.orange[100]};
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.Color.orange[50]};
	}
`
const MoreProductListWrap = styled.section``

const S = {
	Box,
	MainWrap,
	LeftBtn,
	RightBtn,
	ImageWrap,
	LinkProfile,
	LeftProfileWrap,
	InfoWrap,
	NickNameDiv,
	LocationDiv,
	RightProfileWrap,
	TampWrap,
	TampText,
	TampTamp,
	TampSpan,
	TampFace,
	TampBox,
	TapmBar,
	DescriptWrap,
	DescriptTitle,
	DescriptCategory,
	DescriptPrice,
	DescriptContent,
	DescriptCount,
	MoreProductWrap,
	MoreProductHeader,
	MoreProductLinkWarp,
	MoreProductLink,
	MoreProductListWrap,
}
export default S
