export function fetchRestaurants() {

    fetch('http://localhost:3000/api/v1/restaurants')
        .then(response => response.json())
        .then(data => console.log(data))

}