import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
	return(
		<header className="header" >
			<Link to="./" className="header__logo">
				Logo
			</Link>
			<ul className="header-list">
				<li className="header-list__item is-active">
					<Link to="./" className="header-list__link" >Home</Link>
				</li>
				<li className="header-list__item">
					<Link to="./news" className="header-list__link" >News</Link>
				</li>
				<li className="header-list__item">
					<Link to="./profile" className="header-list__link" >Profile</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header