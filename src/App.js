import React from 'react';
import NavBar from './components/NavBar.js'
import RestaurantsContainer from './containers/RestaurantsContainer'

// import {connect} from 'react-redux';
// import {fetchRestaurants} from './actions/fetchRestaurants'
// import { Route, Switch } from 'react-router-dom';
// import RestaurantInput from './components/RestaurantInput';


class App extends React.Component {
  
  //render RestaurantsContainer
  render() {
    return (
      <div>
        <h1> Best Burgers </h1>
        <p>Welcome to the best burger React/Redux app! Here you can add your restaurants that make your favorite burgers!</p>
        <NavBar />
        <RestaurantsContainer/>
        
      </div>
    );
  }
}

export default App;
