import React, {Component} from 'react'
import './Login.scss'
import {Redirect} from 'react-router-dom'

export default class Login extends Component{

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.onLogIn()
    } 

    render() {

      if(this.props.isLoggedIn) {
        return <Redirect to="./profile" />
      }

      return (
        <form className="login" onSubmit={this.handleSubmit} >
          <label className="login-label" >
            <span className="login-label__title">Login</span>
            <input type="text" className="login__input" />
          </label>
          <label className="login-label" >
            <span className="login-label__title">Password</span>
            <input type="password" className="login__input" />
          </label>
          <button className="button login__submit">Sign in</button>
          <span className="login__error">Incorrect username or password.</span>
        </form>
      )

    }

}