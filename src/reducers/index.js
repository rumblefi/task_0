const initialState = {
    news: [],
    homeData: []
}

const reducer = (state = initialState, {type,payload}) => {

    switch (type) {
        case 'NEWS_LOADED':
			return {news: payload}
		case 'HOME_DATA_LOADED':
            return {homeData: payload}
        default:
            return state
    }

}

export default reducer