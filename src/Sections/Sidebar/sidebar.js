import React, {Component} from "react";
import './sidebar.scss';
import MenuItem from "../../Components/MenuItem/MenuItem";

let Sidebar = (props) => {
    let i = 0;
    let Items = props.items.map((item) => {
        return <MenuItem key={i++} icon={item[0]} heading={item[1]} isActive={item[2]}/>
    })
    return(
        <div className={'sidebar'}>
            <ul className="sidebar--menu">
                {Items}
            </ul>
            <div className="legal">
                &copy; 2017 by trillo.All design rights reserved
            </div>
        </div>
    )
}

export default Sidebar;