import React from 'react'

const Restaurants = (props) => {
    return (
        <div>
            {props.restaurants.map(restaurant => <li key={restaurant.id}>{restaurant.name} - {restaurant.location}</li> )}
        </div>
    )

}

export default Restaurants