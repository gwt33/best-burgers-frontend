import React from 'react'

const Burgers = (props) => {

    console.log(props)

    return (
        <div>
            <ul>
            {props. burgers && props.burgers.map(burger => 
                <li key={burger.id}>{burger.name} - {burger.description} - {burger.price}</li>
            )}
            </ul>
        </div>
    )
}

export default Burgers;