import React from 'react'
import Restaurants from '../components/Restaurants'
import RestaurantInput from '../components/RestaurantInput'
import fetchRestaurants from '../actions/fetchRestaurants'
import {connect} from 'react-redux';

class RestaurantsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        return (
            <div>
                <RestaurantInput/>
                <Restaurants restaurants={this.props.restaurants}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantsContainer);  