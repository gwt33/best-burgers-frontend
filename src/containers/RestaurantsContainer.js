import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
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
                    <Route path='/restaurants/:id' render={(routerProps) => <Restaurant {...routerProps} restaurants={this.props.restaurants}/>} />
                    <Route path='/restaurants' render={(routerProps) => <Restaurants {...routerProps} restaurants={this.props.restaurants}/>} />
                </Switch>
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