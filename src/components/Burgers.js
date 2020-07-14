import React from 'react'
import {connect} from 'react-redux'
import {deleteBurger} from '../actions/deleteBurger'


const Burgers = (props) => {

    console.log(props.burgers)

    // const handleDelete = (burger) => {
    //     this.props.deleteBurger(burger.id, burger.restaurant_id)
    // }

    return (
        <div>
            {props.burgers && props.burgers.map(burger => 
                <li key={burger.id}>{burger.name} - {burger.description} - {burger.price}
                    {/* <button onClick={() => handleDelete(burger)}>Delete</button> */}
                </li>

            )}
        </div>
    )
}

// export default connect(null, {deleteBurger})(Burgers)
export default Burgers