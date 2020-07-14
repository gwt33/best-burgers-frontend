import React from 'react';
import {connect} from 'react-redux';
import NavBar from './components/NavBar.js'
// import {fetchRestaurants} from './actions/fetchRestaurants'
import RestaurantsContainer from './containers/RestaurantsContainer'
import { Route, Switch } from 'react-router-dom';
import RestaurantInput from './components/RestaurantInput';


class App extends React.Component {
  
  //render RestaurantsContainer
  render() {
    return (
      <div className="App">
        <h1><span role="img" aria-label="burger-icon">🍔</span> Best Burgers <span role="img" aria-label="burger-icon">🍔</span></h1>
        <NavBar />
        <Switch>
          {/* <Route path="/restaurants/new" component={RestaurantInput}/> */}
        </Switch>
        <RestaurantsContainer/>
      </div>
    );
  }
}

export default App;
