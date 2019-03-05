import React from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import News from '../pages/News/News'

const App = () => {
	return(
		<div className="app">
			<Header />
			<div className="app__content">
				<News />
			</div>
		</div>
	)
}

export default App