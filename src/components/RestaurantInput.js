import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createRestaurant} from '../actions/createRestaurant'

class RestaurantInput extends React.Component {

    state = {
        name: '',
        location: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.location]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            name: '',
            location: ''
        })
        this.props.createRestaurant(this.state)
    }

    // setup form for creating new restaurant
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Create new Restaurant!</h3> 
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type='text' placeholder='Location' value={this.state.location} name="location" onChange={this.handleChange}/> <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {createRestaurant})(RestaurantInput)