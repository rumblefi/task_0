const initialState = {
    news: [],
    homeData: [],
    loading: true
}

const reducer = (state = initialState, {type,payload}) => {

    switch (type) {
        case 'NEWS_LOADED':
			return {
                ...state,
                news: payload,
                loading: false
            }
        case 'NEWS_REQUESTED':
            return{
                ...state,
                news: [],
                loading: true
            }    
		case 'HOME_DATA_LOADED':
            return {
                ...state,
                homeData: payload,
                loading: false
            }
        case 'HOME_DATA_REQUESTED':
            return{
                ...state,
                homeData: [],
                loading: true
            }
        default:
            return state
    }

}

export default reducer