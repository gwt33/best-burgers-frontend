import React from 'react'

const Restaurant = (props) => {

    let restaurant = props.restaurants[props.match.params.id - 1]

    return (
        <li>
            {restaurant ? restaurant.name : null} - {restaurant ? restaurant.location : null}
        </li>
    )
}

export default Restaurant;
