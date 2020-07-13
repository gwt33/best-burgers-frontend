import React from 'react'
import {Redirect} from 'react-router-dom'
import BurgersContainer from '../containers/BurgersContainer'

const Restaurant = (props) => {

    let restaurant = props.restaurants[props.match.params.id - 1]
    // let restaurant = props.restaurants.filter(restaurant => restaurant.id == props.match.params.id)

    return (
        <div>
            {restaurant ? null : <Redirect to='/restaurants'/>}
            <h2>{restaurant ? restaurant.name : null} - {restaurant ? restaurant.location : null}</h2>
            <BurgersContainer restaurant={restaurant}/>
        </div>
    )
}

export default Restaurant;
