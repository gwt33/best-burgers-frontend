import React from 'react'
import {Redirect} from 'react-router-dom'
import BurgersContainer from '../containers/BurgersContainer'
import { connect } from 'react-redux'

const Restaurant = (props) => {
    let fetchCompleted = props.restaurants.length !== 0

    let restaurant = props.restaurants.find( r => r.id == props.match.params.id)
    // let restaurant = props.restaurants.filter(restaurant => restaurant.id == props.match.params.id)
    return (
        <>{ fetchCompleted ? <div>
            { restaurant ?
            <>
            <h2>{restaurant.name} - {restaurant.location}</h2>
            <BurgersContainer restaurant={restaurant}/> </> 
            : <Redirect to='/restaurants'/>}
        </div>
             : <p>loading...</p>}</>
    )
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurant);
