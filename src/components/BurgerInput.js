import React from 'react';
import {connect} from 'react-redux';
import {createBurger} from '../actions/createBurger';

class BurgerInput extends React.Component {

    state = {
        name: '',
        description: '',
        price: '',

    }
    
    handleChange = (event) => {
        // debugger
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.description]: event.target.value,
            [event.target.price]: event.target.value
        })
    }
    
    handleSubmit = (event, _, props) => {
        // debugger
        event.preventDefault()
        this.props.createBurger(this.state, this.props.restaurant.id)
        this.setState({
            name: '',
            description: '',
            price: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <strong>Add a new Burger!</strong><br/>
                    <input id={this.state.id} type='text' placeholder='Name' name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <input id={this.state.id} type='text' placeholder='Description' name="description" value={this.state.description} onChange={this.handleChange}/><br/>
                    {/* <input id={this.state.id} type='text' placeholder='Price' name="price" value={this.state.price} onChange={this.handleChange}/><br/> */}
                    <input type="number" placeholder='Price' name="price" min="1" step="0.01" value={this.state.price} onChange={this.handleChange}/><br/>

                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {createBurger})(BurgerInput);