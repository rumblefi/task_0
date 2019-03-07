import React, {Component} from 'react'
import ListItem from '../ListItem/ListItem'
import {connect} from 'react-redux'
import homeDataLoaded from '../../actions/homeDataLoaded'
import withNewsService from '../HOC/withNewsService'
import compose from '../../utils/compose'
import Spinner from '../Spinner/Spinner'
import homeDataRequested from '../../actions/homeDataRequested'
import errorAction from '../../actions/errorAction'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

class List extends Component {

    componentDidMount() {

        const {newsService, homeDataLoaded, homeDataRequested, errorAction} = this.props

        homeDataRequested()
        newsService
            .getHomeData()
            .then(homeDataLoaded)
            .catch(errorAction)

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

        const {loading, error} = this.props

        if (loading) {
            return <Spinner/>
        }

        if(error) {
            return <ErrorIndicator errorMessage={error} />
        }

        return (
            <ul className="list">
                {this.renderItems()}
            </ul>
        )
    }

}

const mapStateToProps = ({homeData, loading, error}) => {
    return {homeData, loading, error}
}

const mapDispatchToProps = {
    homeDataLoaded,
    homeDataRequested,
    errorAction
}

export default compose(withNewsService(), connect(mapStateToProps, mapDispatchToProps))(List)