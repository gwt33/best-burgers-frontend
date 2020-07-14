import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

    return (

        <div className="NavBar">
            {/* <NavLink to="/"> Home </NavLink> */}
            <NavLink to="/restaurants"> Restaurants </NavLink>
            <NavLink to="/restaurants/new"> Add Restaurant </NavLink>
            {/* <NavLink exact activeStyle={activeStyle} to="/reviews"> Reviews </NavLink> */}
        </div>    )
}

export default NavBar;