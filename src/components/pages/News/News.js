import React, {Component} from 'react'
import Article from '../../Article/Article'
import {connect} from 'react-redux'
import withNewsService from '../../HOC/withNewsService'
import newsLoaded from '../../../actions/newsLoaded'
import compose from '../../../utils/compose'
import Spinner from '../../Spinner/Spinner'
import newsRequested from '../../../actions/newsRequested'
import errorAction from '../../../actions/errorAction'
import ErrorIndicator from '../../ErrorIndicator/ErrorIndicator'

class News extends Component {

    componentDidMount() {

        const {newsService, newsLoaded, newsRequested, errorAction} = this.props

        newsRequested()

        newsService
            .getNews()
            .then(newsLoaded)
            .catch(errorAction)

    }

    renderItems() {

        const {news} = this.props

        return news.map(article => {
            const {
                id,
                ...articleProps
            } = article
            return (<Article key={id} {...articleProps}/>)
        })
    }

    render() {

        const {loading, error} = this.props

        if(loading) {
            return <Spinner />
        }

        if(error) {
            return <ErrorIndicator errorMessage={error} />
        }

        return (
            <div className="news"  >
                <h1>News</h1>
                {this.renderItems()}
            </div>
        )

    }

}

const mapStateToProps = ({news, loading, error}) => {
    return {
        news, 
        loading,
        error
    }
}

const mapDispatchToProps = {
    newsLoaded,
    newsRequested,
    errorAction
}

export default compose(withNewsService(), connect(mapStateToProps, mapDispatchToProps))(News)