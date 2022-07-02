import React from "react";
import './button-arrow.scss';

let ButtonArrow = ({text}) => {
    return(
        <a className={'button__arrow'}>{text} <span>&rarr;</span></a>
    )
}

export default ButtonArrow;