export default function fetchRestaurants() {
    
    // get request for restaurants
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/restaurants')
            .then(response => response.json())
            .then(restaurantsJSON => dispatch({
                // dispatches to reducer 
                type: 'FETCH_RESTAURANTS',
                payload: restaurantsJSON
                })
            )
    }
}