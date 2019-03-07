const newsLoaded = (news) => {
	return{
		type: 'NEWS_LOADED',
		payload: news
	}
}

export default newsLoaded