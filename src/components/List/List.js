import React, {Component} from 'react'
import ListItem from '../ListItem/ListItem'
import {connect} from 'react-redux'
import homeDataLoaded from '../../actions/homeDataLoaded'
import withNewsService from '../HOC/withNewsService'
import compose from '../../utils/compose'
import Spinner from '../Spinner/Spinner'

class List extends Component {

    componentDidMount() {

        const {newsService, homeDataLoaded} = this.props
        newsService.getHomeData()
            .then(homeDataLoaded)

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

        const {loading} = this.props

        if(loading) {
            return <Spinner />
        }

        return (
            <ul className="list">
                {this.renderItems()}
            </ul>
        )
    }

}

const mapStateToProps = ({homeData,loading}) => {
    return {
        homeData,
        loading
    }
}

const mapDispatchToProps = {
    homeDataLoaded
}

export default compose(withNewsService(), connect(mapStateToProps, mapDispatchToProps))(List)