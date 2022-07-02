import React, {Component} from "react";
import {Search, Bookmark, ChatBubble} from '@mui/icons-material';
import user from '../../img/user-2.jpg';
import logo from '../../img/logo.png';
import './header.scss';
import {grey, pink} from "@mui/material/colors";

export default class Header extends Component{
    render() {
        return(
            <div className={'header'}>
                <img src={logo} alt="trillo logo" className="logo"/>

                <form action="src/Sections/Header/header#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels"/>
                    <button className={'search__button'}>
                        <Search className={'search__icon'} />
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <Bookmark className={'user-nav__icon'} style={{width: '2.5rem', height: '2.5rem'}}/>
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <ChatBubble className={'user-nav__icon'} style={{width: '2.5rem', height: '2.5rem'}}/>
                        <span className="user-nav__notification">18</span>
                    </div>
                    <div className="user-nav__user">
                        <img src={user} alt="user photo" className="user-nav__user-photo" />
                        <span className={'user-nav__user-name'}>Ira</span>
                    </div>
                </nav>
            </div>
        )
    }
}