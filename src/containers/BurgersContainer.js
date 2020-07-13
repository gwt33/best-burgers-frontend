import React from 'react'
import BurgerInput from '../components/BurgerInput'
import Burgers from '../components/Burgers'

class BurgersContainer extends React.Component {
    render() {
        return (
            <div>
                <BurgerInput restaurant={this.props.restaurant}/>
                <Burgers burgers={this.props.restaurant && this.props.restaurant.burgers}/>
            </div>
        )
    }
}

export default BurgersContainer;