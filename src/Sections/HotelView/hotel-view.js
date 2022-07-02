import React, {Component} from "react";
import './hotel-view.scss';
import Cta from "../CallToAction/cta";
import UserReviews from "../UserReviews/user-reviews";
import Description from "../Description/description";
import Overview from "../Overview/overview";
import Gallery from "../Gallery/gallery";

let HotelView = ({gallery, heading, starsNumber, location, rate, votes, listPoints, usersPhotos, reviews, freeRooms}) => {


    return(
        <div className={'hotel-view'}>
            <Gallery gallery={gallery}/>
            <Overview heading={heading} starsNumber={starsNumber} location={location} rate={rate} votes={votes}/>
            <div className="detail">
                <Description usersPhotos={usersPhotos} listPoints={listPoints}/>
               <UserReviews reviews={reviews}/>
            </div>
            <Cta freeRooms={freeRooms}/>
        </div>
    )
}

export default HotelView;