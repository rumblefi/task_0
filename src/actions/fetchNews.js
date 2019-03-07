import newsLoaded from './newsLoaded'
import errorAction from './errorAction'


const fetchNews = (newsService, dispatch) => () => {

    newsService
        .getNews()
        .then(data => dispatch(newsLoaded(data)))
        .catch(error => dispatch(errorAction(error)))
}


export default fetchNews