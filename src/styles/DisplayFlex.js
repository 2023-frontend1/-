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
	alignMiddle: css`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`,
	directionColumn: css`
		display: flex;
		flex-direction: column;
	`,
}
export default DisplayFlex
