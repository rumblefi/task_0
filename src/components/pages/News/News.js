import React, {Component} from 'react'
import Article from '../../Article/Article'
import {connect} from 'react-redux'
import withNewsService from '../../HOC/withNewsService'
import newsLoaded from '../../../actions/newsLoaded'
import compose from '../../../utils/compose'

class News extends Component {

    componentDidMount() {

        const {newsService, newsLoaded} = this.props
        const data = newsService.getNews()
        
        newsLoaded(data)

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
        return (
            <div className="news">
                <h1>News</h1>
                {this.renderItems()}
            </div>
        )
    }

}

const mapStateToProps = ({news}) => {
    return {news}
}

const mapDispatchToProps = {
    newsLoaded
}

export default compose(
    withNewsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(News)