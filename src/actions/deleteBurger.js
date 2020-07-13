export const deleteBurger = (burgerId, restaurantId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/burgers/${burgerId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(restaurant => dispatch({
            type: 'DELETE_BURGER',
            burgerId: burgerId
        }))
    }

}