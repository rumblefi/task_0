const errorAction = (errorInfo) => {
	return{
		type: 'ERROR',
		payload: errorInfo
	}
}

export default errorAction