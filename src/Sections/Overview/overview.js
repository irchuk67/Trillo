import React from "react";
import {LocationOn, Star} from "@mui/icons-material";
import './overwiew.scss';

let Overview = ({heading, starsNumber, location, rate, votes}) => {
    let StarsDrawer = (starsNumber) => {
        let stars = [];
        for (let i = 0; i < starsNumber; i++){
            stars.push(<Star className={'overview__icon'}/>);
        }
        return stars;
    }

    let stars = StarsDrawer(starsNumber);

    return(
        <div className="overview">
            <h1 className="overview__heading">
                {heading}
            </h1>
            <div className={'overview__stars'}>{stars}</div>
            <div className={'overview__location'}>
                <LocationOn  className={'overview__location overview__icon'}/>
                <button className={'overview__location--name'}>{location}</button>
            </div>
            <div className="overview__rating">
                <p className="overview__rate">{rate}</p>
                <p className="overview__votes">{votes} votes</p>
            </div>



        </div>
    )
}

export default Overview;