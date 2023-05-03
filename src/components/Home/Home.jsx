import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div className='header-item'>
                <h1 className='heater-title'>Job Matcher</h1>
                <Header></Header>
                <button className='header-btn'>Start Apply</button>
            </div>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;