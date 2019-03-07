const newsLoaded = (news) => {
	return{
		type: 'FETCH_NEWS_SUCCESS',
		payload: news
	}
}

export default newsLoaded