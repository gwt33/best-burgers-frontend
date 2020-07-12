import React from 'react'
import Restaurants from '../components/Restaurants'
import RestaurantInput from '../components/RestaurantInput'
import fetchRestaurants from '../actions/fetchRestaurants'
import {connect} from 'react-redux';

class RestaurantsContainer extends React.Component {

    // fetching restaurants in backend API
    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        return (
            <div>
                <RestaurantInput/> <br/>
                <Restaurants restaurants={this.props.restaurants}/>
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