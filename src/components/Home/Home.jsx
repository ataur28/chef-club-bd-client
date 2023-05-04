import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import "./Home.css"
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Home = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className='header-item'>
                <h1 className='heater-title'>JobChefClubBD</h1>
                <Header></Header>
                <div className='header-btn-icon'>
                    {user && <FaUserCircle style={{ fontSize: '3rem' }}></FaUserCircle>}

                    {user ?
                        <Button onClick={handleLogOut} className='header-btn'>Logout</Button> :
                        <Link to="/login">
                            <Button className='header-btn'>Login</Button>
                        </Link>
                    }
                </div>
            </div>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;