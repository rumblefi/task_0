import React, {Component} from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import News from '../pages/News/News'
import Login from '../pages/Login/Login'
import Profile from '../Profile/Profile'

export default class App extends Component{

	state = {
		isLoggedIn: false
	}

	onLogIn = () => {
		this.setState({
			isLoggedIn: true
		})
	}

	onLogOut = () => {
		this.setState({
			isLoggedIn: false
		})
	}

	render() {

		const {isLoggedIn} = this.state

		return(
			<Router>
				<div className="app">
					<Header />
						<div className="app__content">
							<Route path="/" exact component={Home} />
							<Route path="/news" component={News} />
							<Route path="/profile" component={ () =>  (
								<Profile isLoggedIn={isLoggedIn} onLogOut={this.onLogOut} />
							)} />
							<Route path="/login" component={ () => (
								<Login onLogIn={this.onLogIn} isLoggedIn={isLoggedIn} />
							)} />
						</div>
				</div>
			</Router>
		)
	}

}