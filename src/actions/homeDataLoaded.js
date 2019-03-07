const homeDataLoaded = (homeData) => {
	return{
		type: 'HOME_DATA_LOADED',
		payload: homeData
	}
}

export default homeDataLoaded