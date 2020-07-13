import React from 'react';
import {connect} from 'react-redux';
import addBurger from '../actions/addBurger';
// import BurgerInput from "../component/BurgerInput";

class BurgerInput extends React.Component {

    state = {
        name: '',
        description: '',
        price: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.description]: event.target.value,
            [event.target.price]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // addBurger(this.state, this.props.id)
    }

    render() {
        return (
            <div>
                <form>
                    <strong>Add a new Burger!</strong><br/>
                    <input type='text' placeholder='Name' name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <input type='text' placeholder='Description' name="description" value={this.state.description} onChange={this.handleChange}/><br/>
                    {/* <input type='integer' placeholder='Price' name="price" value={this.state.price} onChange={this.handleChange}/><br/> */}
                    <input type="number" placeholder='Price' name="price" min="1" step="0.01" value={this.state.price} onChange={this.handleChange}/><br/>

                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null)(BurgerInput);