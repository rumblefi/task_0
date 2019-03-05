import React from 'react'
import './Article.scss'

const Article = ({img,title,author,descr,link}) => {
    return (
		<article className="article" >
			<div className="article__col article__col--first">
				<img src={img} className="article__img" alt=""/>
			</div>
			<div className="article__col article__col--last">
				<a href={link} target="_blank" className="article__title">{title}</a>
				<div className="article__author">{author}</div>
				<div className="article__descr">{descr}</div>
			</div>
		</article>
    )
}

export default Article