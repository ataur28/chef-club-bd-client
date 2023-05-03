import React from 'react';
import './First.css'
import profile from '../../../public/profile-pic.png'
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import JobFeatures from '../JobFeatures/JobFeatures';

const First = () => {
    // const job = useLoaderData();
    // console.log(job);
    return (
        <div>
            <div className='header-first-section'>
                <div className='header-title-section'>
                    <h1 className='header-title-first'>One Step Closer To Your <span className='header-title-first-sub'>Dream Job</span></h1>
                    <p className='header-title-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='header-first-btn'>Get Started</button>
                </div>
                <div>
                    <img className='profile-img' src={profile} alt="" />
                </div>
            </div>

            <section>
                <JobCategory></JobCategory>
            </section>
            <section>
                <JobFeatures></JobFeatures>
            </section>

        </div>
    );
};

export default First;