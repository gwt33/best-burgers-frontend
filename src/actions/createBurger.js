export const createBurger = (burger, restaurantId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/burgers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(burger)
        })
        .then(response => response.json())
        .then(restaurant => {
            if (restaurant.error) {
                alert(restaurant.error)
            } else {
                dispatch({type: 'CREATE_BURGER', payload: restaurant})
                }
            }
        )
    }
}