import { css, styled } from 'styled-components'

const BoxShapeCss = {
	default: css`
		border-radius: 8px;
	`,
	round: css`
		border-radius: 50%;
	`,
}
const SizeCss = {
	smallUser: css`
		width: 40px;
		height: 40px;
	`,
	largeUser: css`
		width: 58px;
		height: 58px;
	`,
	smallProduct: css`
		width: 223px;
		height: 223px;
	`,
	largeProduct: css`
		width: 729px;
		height: 500px;
	`,
}

const ImgBox = styled.img`
	${({ $boxshape }) => BoxShapeCss[$boxshape]}
	${({ $size }) => SizeCss[$size]}
`

const S = {
	ImgBox,
}

export default S
