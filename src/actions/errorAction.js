const errorAction = (errorInfo) => {
	return{
		type: 'FETCH_FAILURE',
		payload: errorInfo
	}
}

export default errorAction