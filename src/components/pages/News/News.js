import React, {Component} from 'react'
import Article from '../../Article/Article'
import {connect} from 'react-redux'
import withNewsService from '../../HOC/withNewsService'
import newsLoaded from '../../../actions/newsLoaded'
import compose from '../../../utils/compose'
import Spinner from '../../Spinner/Spinner'

class News extends Component {

    componentDidMount() {

        const {newsService, newsLoaded} = this.props

        newsService
            .getNews()
            .then(newsLoaded)

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

        const {loading} = this.props

        if(loading) {
            return <Spinner />
        }

        return (
            <div className="news"  >
                <h1>News</h1>
                {this.renderItems()}
            </div>
        )

    }

}

const mapStateToProps = ({news, loading}) => {
    return {
        news, 
        loading
    }
}

const mapDispatchToProps = {
    newsLoaded
}

export default compose(withNewsService(), connect(mapStateToProps, mapDispatchToProps))(News)