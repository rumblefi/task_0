import React from 'react'
import './Header.scss'

const Header = () => {
	return(
		<header className="header" >
			<ul className="header-list">
				<li className="header-list__item is-active">
					<a href="" className="header-list__link">Home</a>
				</li>
				<li className="header-list__item">
					<a href="" className="header-list__link">News</a>
				</li>
				<li className="header-list__item">
					<a href="" className="header-list__link">Profile</a>
				</li>
			</ul>
		</header>
	)
}

export default Header