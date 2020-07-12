import React from 'react';
import {connect} from 'react-redux';
// import {fetchRestaurants} from './actions/fetchRestaurants'
import RestaurantsContainer from './containers/RestaurantsContainer'

class App extends React.Component {
  
  

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <RestaurantsContainer/>
      </div>
    );
  }
}

// accessing values in store as props
const mapStateToProps = (state) => {

}

export default App;
