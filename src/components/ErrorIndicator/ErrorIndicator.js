import React from 'react'
import './ErrorIndicator.scss'

const ErrorIndicator = ({errorMessage: {message}}) => {

	return(
		<div className="error-indicator">{message}</div>
	)

}

export default ErrorIndicator