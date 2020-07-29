import React, { Component } from 'react'

class ClickMe extends Component {
    
    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    // }
    state = {
        count: 0
            // this.state = {
            // count: 0
        // }
    }

    handleClick = () => {
        this.setState((prevState, props) => {
            return {count: prevState.count + 1}
        })
    }

        // console.log('a');

        // fetch('http://localhost:3000/api/v1/restaurantsfdjskfjlds')
        //     .then(resp => {
        //         if(resp.status !== 200) {
        //             console.log(resp)
        //             throw new Error(resp.statusText);
        //         }
        //         console.log('b');
        //         return resp.json();
        //     })
        //     .then(data => console.log('c', data))
        //     .catch(errors => console.log('d', errors))

        // console.log('e')

        // 
    // }
 
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button> {this.state.count}
            </div> );
    }
}

export default ClickMe