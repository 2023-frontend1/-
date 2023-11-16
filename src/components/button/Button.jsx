import React from 'react'
import ButtonStyle from './Button.styles'

const Button = ({ variant, size, shape, children, ...rest }) => {
	return (
		<ButtonStyle {...{ variant, size, shape }} {...rest}>
			{children}
		</ButtonStyle>
	)
}

export default Button
