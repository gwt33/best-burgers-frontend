export default function fetchRestaurants() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/restaurants')
            .then(response => response.json())
            .then(restaurantsJSON => dispatch({
                type: 'FETCH_RESTAURANTS',
                payload: restaurantsJSON
                })
            )
    }
}