export default function restaurantReducer(state = {restaurants: []}, action) {

    // updating redux store
    switch (action.type) {
        case 'FETCH_RESTAURANTS':
            return {restaurants: action.payload}
        case 'CREATE_RESTAURANT':
            return {
                ...state, 
                restaurants: [...state.restaurants, action.payload]
            }
        case 'CREATE_BURGER':
            let restaurants = state.restaurants.map(restaurant => {
                if (restaurant.id === action.payload.id) {
                    return action.payload
                } else {
                    return restaurant
                }
            })
            return {...state, restaurants: restaurants}
        // case 'DELETE_BURGER':
        //     let restaurants_array = state.restaurants.map(restaurant => {
        //         if (restaurant.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return restaurant
        //         }
        //     })
        //     return {...state, restaurants: restaurants_array}
        default:
            return state
    }

}