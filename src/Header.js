import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                <SearchIcon />
                   <p>Search</p> 
                </div>
                <div className="header__icon">
                <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png" />
        </div>
    )
}

export default Header
