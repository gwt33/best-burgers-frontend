import React from 'react'
import Restaurant from './Restaurant';

// renders each restaurant
const Restaurants = (props) => {
    return (
        <div>
            {props.restaurants.map(restaurant => <div key={restaurant.id}><Restaurant restaurant={restaurant}/></div> )}
        </div>
    )

}

export default Restaurants