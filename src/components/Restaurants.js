import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
// import Restaurant from './Restaurant';
// import {deleteBurger} from '../actions/deleteBurger'

// renders each restaurant
const Restaurants = (props) => {

    // const handleDelete = () => {
    //     props.deleteBurger()
    // }

    return (
        <div>
        <h1>Restaurants</h1>
            {props.restaurants.map(restaurant => 
                <li key={restaurant.id}>
                    <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name} - {restaurant.location}</Link>
                {/* <button onClick={handleDelete}>Delete</button> */}
                </li>  )} <br/>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurants);