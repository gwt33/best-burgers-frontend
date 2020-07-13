export const addBurger = (burger, transactionId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/restaurants/${transactionId}/burgers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(burger)
        })
        .then(response => response.json())
        .then(burger => dispatch({
            type: 'ADD_BURGER',
            payload: burger
            })
        )
    }
}