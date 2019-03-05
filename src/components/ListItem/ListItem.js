import React from 'react'
import './ListItem.scss'

const ListItem = ({title,link}) => {
    return (
        <li className="list__item" >
            <p>
                <strong>{title}</strong><br/>
                <a href={link} target="_blank">{link}</a>
            </p>
        </li>
    )
}

export default ListItem