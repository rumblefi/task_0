import React from 'react'
import {NewsServiceConsumer} from '../NewsServiceContext/NewsServiceContext'

const withNewsService = () => (Wrapped) => {

	return (props) => {
		return(
			<NewsServiceConsumer>
				{
					(newsService) => {
						return(
							<Wrapped {...props} newsService={newsService} />
						)
					}
				}
			</NewsServiceConsumer>
		)
	}

}

export default withNewsService