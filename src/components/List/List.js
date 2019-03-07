import React, {Component} from 'react'
import ListItem from '../ListItem/ListItem'
import {connect} from 'react-redux'
import homeDataLoaded from '../../actions/homeDataLoaded'
import withNewsService from '../HOC/withNewsService'
import compose from '../../utils/compose'

class List extends Component {

    componentDidMount() {

        const {newsService, homeDataLoaded} = this.props
        const data = newsService.getHomeData()

        homeDataLoaded(data)

    }

    renderItems() {

        const {homeData} = this.props

        return homeData.map((item) => {
            const {
                id,
                ...itemProps
            } = item
            return (<ListItem key={id} {...itemProps}/>)
        })
    }

    render() {
        return (
            <ul className="list">
                {this.renderItems()}
            </ul>
        )
    }

}

const mapStateToProps = ({homeData}) => {
    return {homeData}
}

const mapDispatchToProps = {
    homeDataLoaded
}

export default compose(withNewsService(), connect(mapStateToProps, mapDispatchToProps))(List)