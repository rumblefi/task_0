const initialState = {
    news: [],
    homeData: [],
    loading: true
}

const reducer = (state = initialState, {type,payload}) => {

    switch (type) {
        case 'NEWS_LOADED':
			return {
                news: payload,
                loading: false
            }
		case 'HOME_DATA_LOADED':
            return {
                homeData: payload,
                loading: false
            }
        default:
            return state
    }

}

export default reducer