import React from 'react';
import './button.scss'

let Button = ({freeRooms}) => {
    return(
        <button className="btn">
            <span className="btn__visible">Book now</span>
            <span className="btn__hidden">Only {freeRooms} rooms left</span>
        </button>
    )
}

export default Button;