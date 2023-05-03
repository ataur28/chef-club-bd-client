import React from 'react';
import './First.css'
// import profile from '../../../public/profile-pic.png'
import banner3 from '../../../public/banner3.jpg'
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
                    <h1 className='header-title-first'>Welcome to <br /><span className='header-title-first-sub'>Job Chef Club BD</span></h1>
                    <p className='header-title-description'>Chef Club BD is the ultimate cooking social community, where recipes come to life.</p>
                </div>
                <div>
                    <img className='banner-img' src={banner3} alt="" />
                </div>
            </div>

            
            <section>
                <JobFeatures></JobFeatures>
            </section>
            <section>
                <JobCategory></JobCategory>
            </section>

        </div>
    );
};

export default First;