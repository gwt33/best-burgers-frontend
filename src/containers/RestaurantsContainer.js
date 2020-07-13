import React from 'react'
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'
import Restaurants from '../components/Restaurants'
import Restaurant from '../components/Restaurant'
import RestaurantInput from '../components/RestaurantInput'
import fetchRestaurants from '../actions/fetchRestaurants'

class RestaurantsContainer extends React.Component {

    // fetching restaurants in backend API
    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        return (
            <div>
                <Route path='/restaurants/new' component={RestaurantInput}/>
                <Route path='/restaurants/:id' render={(routerProps) => <Restaurant {...routerProps} restaurants={this.props.restaurants}/>} />
                <Route exact path='/restaurants' render={(routerProps) => <Restaurants {...routerProps} restaurants={this.props.restaurants}/>} />
            </div>
        )
    }
}

//store is mapped to props and rendered above
const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantsContainer);  