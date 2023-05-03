import React from 'react';
import './ReviewJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ReviewJob = ({ job }) => {

    const {id, logo, title, name, jobTime, jobCategory, location, salary } = job;
    return (
        <div className='review-job'>
            <img className='review-img' src={logo} alt="" />
            <div className='review-details'>
                <h1 className='review-title'>{title}</h1>
                <p className='review-company-name'>{name}</p>
                <div className='job-category-time'>
                    <button className='primary-btn'>{jobCategory}</button>
                    <button className='primary-btn'>{jobTime}</button>
                </div>
                <div className='job-location-salary'>
                    <p className='primary-text'><FontAwesomeIcon icon={faLocation} /> {location}</p>
                    <p className='primary-text'><FontAwesomeIcon icon={faDollar} /> Salary: {salary}</p>
                </div>

            </div>
            <Link to={`/job/${id}`}><button className='view-btn review-btn'>View Details</button></Link>

        </div>
    );
};

export default ReviewJob;