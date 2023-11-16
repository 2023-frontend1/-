import { css, styled } from 'styled-components'

const VariantCss = {
	primary: css`
		background-color: #f67239;
		color: white;
		&:hover {
			background-color: #ed5413;
		}
	`,
	first: css`
		border: 1px solid #eef0f4;
		background-color: white;
		&:hover {
			background-color: #eef0f4;
		}
	`,
	second: css`
		background-color: #eef0f4;
		&:hover {
			opacity: 0.7;
		}
	`,
}

const SizeCss = {
	small: css`
		width: 92px;
		padding: 10px 0px;
	`,
	medium: css`
		width: 136px;
		font-size: 14px;
		padding: 14px 0px;
	`,
	large: css`
		width: 176px;
		padding: 16px 0px;
	`,
}

const ShapeCss = {
	default: css`
		border-radius: 4px;
	`,
	small: css`
		border-radius: 8px;
	`,
	mideum: css`
		border-radius: 12px;
	`,
}

const ButtonStyle = styled.button`
	${({ variant }) => VariantCss[variant]}
	${({ size }) => SizeCss[size]}
  ${({ shape }) => ShapeCss[shape]}
	font-weight: 700;
	cursor: pointer;
	border: none;
`
export default ButtonStyle
