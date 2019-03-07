import React, {Component} from 'react'
import Article from '../../Article/Article'
import {connect} from 'react-redux'
import withNewsService from '../../HOC/withNewsService'
import compose from '../../../utils/compose'
import Spinner from '../../Spinner/Spinner'
import ErrorIndicator from '../../ErrorIndicator/ErrorIndicator'
import fetchNews from '../../../actions/fetchNews'

class News extends Component {

    componentDidMount() {

        this.props.fetchNews()

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

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator errorMessage={error}/>
        }

        return (
            <div className="news">
                <h1>News</h1>
                {this.renderItems()}
            </div>
        )

    }

}

const mapStateToProps = ({news, loading, error}) => {
    return {news, loading, error}
}

const mapDispatchToProps = (dispatch, {newsService}) => {
    return {
        fetchNews: fetchNews(newsService, dispatch)
    }
}

export default compose(withNewsService(), connect(mapStateToProps, mapDispatchToProps))(News)