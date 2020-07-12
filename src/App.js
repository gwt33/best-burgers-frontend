import React from 'react';
import {connect} from 'react-redux';
// import {fetchRestaurants} from './actions/fetchRestaurants'
import RestaurantsContainer from './containers/RestaurantsContainer'

class App extends React.Component {
  
  //render RestaurantsContainer
  render() {
    return (
      <div className="App">
        <RestaurantsContainer/>
      </div>
    );
  }
}

export default App;
