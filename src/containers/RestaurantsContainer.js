import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import fetchRestaurants from '../actions/fetchRestaurants'
import Restaurants from '../components/Restaurants'
import Restaurant from '../components/Restaurant'
import RestaurantInput from '../components/RestaurantInput'

class RestaurantsContainer extends React.Component {


    // fetching restaurants in backend API
    componentDidMount() {
        this.props.fetchRestaurants()
    }


    // Switch chooses the first route that matches the path
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/restaurants/new' component={RestaurantInput}/>
                    <Route path='/restaurants/:id' render={(routerProps) => <Restaurant {...routerProps} />} />
                    <Route path='/restaurants' render={(routerProps) => <Restaurants {...routerProps}/>} />
                </Switch>
            </div>
        )
    }
}

export default connect(null, {fetchRestaurants})(RestaurantsContainer);  

//the redux store is not just state. it's an object and it has two main key-value pairs. 
//the first is state, which returns the current state 
//the second is dispatch, which is the one and only function that can be passed a value that will change state 

//store.dispatch({action: "ADD_RESTAURANTS", payload: [{}, {}]})