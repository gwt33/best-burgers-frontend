import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    return (

        <div className="NavBar">
            <Link to="/"> Home </Link>
            -
            <Link to="/restaurants"> Restaurants </Link>
            -
            <Link to="/restaurants/new"> Add Restaurant </Link>
        </div>    )
}

export default NavBar;