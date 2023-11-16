import { css } from 'styled-components'

const DisplayFlex = {
	alignCenter: css`
		display: flex;
		align-items: center;
	`,
	justifyCenter: css`
		display: flex;
		justify-content: center;
	`,
	justifyBetween: css`
		display: flex;
		justify-content: space-between;
	`,
	flexCenter: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	directionColumn: css`
		display: flex;
		flex-direction: column;
	`,
}
export default DisplayFlex
