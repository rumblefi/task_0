import React, {Component} from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/Home/Home'
import News from '../pages/News/News'
import Login from '../pages/Login/Login'
import Profile from '../Profile/Profile'
import NotFound from '../NotFound/NotFound'

class App extends Component {

    state = {
        isLoggedIn: false
    }
    
    onLogIn = () => {
        this.setState({isLoggedIn: true})
    }
    
    onLogOut = () => {
        this.setState({isLoggedIn: false})
    }
    
    render() {

        const {isLoggedIn} = this.state

        return (
            <div className="app">
                <Header/>
                <div className="app__content">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/news" component={News}/>
                        <Route
                            path="/profile"
                            component={() => (<Profile isLoggedIn={isLoggedIn} onLogOut={this.onLogOut}/>)}/>
                        <Route
                            path="/login"
                            component={() => (<Login onLogIn={this.onLogIn} isLoggedIn={isLoggedIn}/>)}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }

}

export default App