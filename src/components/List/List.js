import React from 'react'
import ListItem from '../ListItem/ListItem'
import {listData} from './listData'

const items = listData.map ( (item) => {
	const {id,...itemProps} = item	
	return(
		<ListItem key={id} {...itemProps} />
	)
})

const List = () => {
    return (
        <ul className="list" >
			{items}
        </ul>
    )
}

export default List