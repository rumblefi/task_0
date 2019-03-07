import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import NewsService from './services/NewsService'
import {NewsServiceProvider} from './components/NewsServiceContext/NewsServiceContext'
import store from './store'
import App from './components/App/App'


const newsService = new NewsService()

const renderBody = (
	<Provider store={store} >
		<ErrorBoundry>
			<NewsServiceProvider value={newsService} >
				<Router>
					<App/>
				</Router>
			</NewsServiceProvider>
		</ErrorBoundry>
	</Provider>
)


ReactDOM.render(renderBody, document.getElementById('root')
)