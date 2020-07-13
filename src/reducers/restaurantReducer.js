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
        default:
            return state
    }

}