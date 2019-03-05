import React, {Component} from 'react'
import './Profile.scss'
import {Redirect} from 'react-router-dom'

export default class Profile extends Component {

    render() {

        const {isLoggedIn, onLogOut} = this.props

        if (isLoggedIn) {
            return (
                <div className="profile">
                    <h1 className="profile__heading">Profile</h1>
                    <div className="profile-item">
                        <strong>Username:</strong>
                        <span>Admin</span>
                    </div>
                    <button className="button" onClick={onLogOut} >Sign out</button>
                </div>
            )
        }

        return <Redirect to="/login"/>

    }

}