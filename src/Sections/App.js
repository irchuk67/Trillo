import React, {Component} from "react";
import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import HotelView from "./HotelView/hotel-view";

import {Home, FlightTakeoff, Key, Map} from '@mui/icons-material';
import user1 from '../img/user-1.jpg';
import user2 from '../img/user.jpg';
import user3 from '../img/user-3.jpg';
import user4 from '../img/user-4.jpg';
import view1 from "../img/hotel-1.jpg";
import view2 from "../img/hotel-2.jpg";
import view3 from "../img/hotel-3.jpg";
import './App.scss'

export default class App extends Component{
    render() {
        console.log(Home)
        return(
            <div className={'container'}>
                <Header/>
                <div className={'content'}>
                    <Sidebar items={
                        [
                            [Home, "Hotel", true],
                            [FlightTakeoff, "Flight", false],
                            [Key, "Car rental", false],
                            [Map, "Tours", false]
                        ]}
                    />
                    <HotelView gallery={[view1, view2, view3]}
                                heading={'Hotel las palmas'}
                               starsNumber={5}
                               location={'Albufeira, Portugal'}
                               rate={8.6}
                               votes={429}
                               listPoints={["Close to the beach",
                                   "Free airport shuttle",
                                   "Air conditioning",
                                   "We speak all languages",
                                   "Breakfast included",
                                   "Free wifi in all rooms",
                                   "Pets allowed",
                                   "Perfect for families"]}
                               usersPhotos={[user1, user2, user3, user4]}
                               reviews={[
                                   ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.', user1, 'Nick Smith', 'Feb 24rd, 2017', 7.8],
                                   ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.', user2, 'Jake Martines', 'Sep 13th, 2016', 5.6]]}
                               freeRooms={4}
                    />
                </div>
            </div>
        )
    }
}