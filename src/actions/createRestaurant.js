// POST action to create a new restaurant

export const createRestaurant = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/restaurants', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(restaurantJson => dispatch({
                //this dispatches to the reducer
                type: 'CREATE_RESTAURANT',
                payload: restaurantJson
            })
        )
    }
}