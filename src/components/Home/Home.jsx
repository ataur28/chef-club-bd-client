import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div className='header-item'>
                <h1 className='heater-title'>JobChefClubBD</h1>
                <Header></Header>
                <div>
                <button className='header-btn'>Profile</button>
                <button className='header-btn btn-login'>Login</button>
                </div>
            </div>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;