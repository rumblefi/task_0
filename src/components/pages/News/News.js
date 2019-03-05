import React from 'react'
import Article from '../../Article/Article'
import {newsData} from './newsData'

const articles = newsData.map( article => {
    const {id, ...articleProps} = article
    return(
        <Article key={id} {...articleProps} />
    )
})

const News = () => {
    return (
        <div className="news">
			<h1>News</h1>
            {articles}
        </div>
    )
}

export default News