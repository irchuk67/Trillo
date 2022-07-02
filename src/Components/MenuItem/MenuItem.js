import React from "react";
import './MenuItem.scss';

let MenuItem = ({heading, icon, isActive}) => {
    const Icon = icon;
    return(
        <li className={`menu-item menu-item--${isActive?'active':''}`}>
            <Icon className={"menu-item__icon"}/>
            <a className="menu-item__heading">{heading}</a>
        </li>
    )
}

export default MenuItem;