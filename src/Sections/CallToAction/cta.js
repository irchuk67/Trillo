import React from 'react';
import Button from "../../Components/Buttons/button";
import './cta.scss'

let Cta = ({freeRooms}) => {
    return(
        <div className="cta">
            <h2 className="cta__text">
                Good news! We have {freeRooms} rooms for your selected dates.
            </h2>
            <Button freeRooms={freeRooms}/>
        </div>
    )
}

export default Cta;