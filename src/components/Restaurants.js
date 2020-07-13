import React from 'react'
import {Route, Link} from 'react-router-dom';
import Restaurant from './Restaurant';

// renders each restaurant
const Restaurants = (props) => {
    return (
        <div>
        <h1>Restaurants</h1>
            {props.restaurants.map(restaurant => 
                <li key={restaurant.id}>
                    <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name} - {restaurant.location}</Link>
                </li> )}
        </div>
    )

}

export default Restaurants