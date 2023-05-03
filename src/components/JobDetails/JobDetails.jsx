import React from 'react';
import './JobDetails.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocation } from '@fortawesome/free-solid-svg-icons'

const JobDetails = ({ job }) => {
     console.log(job);
    const { id, picture, name,experiences, recipes_number, likes } = job;

    // const handleAddToCart = (job) => {
    //     console.log(job)
    // }

    return (
        <div>
            <div className='job-feature-item'>
                <img className='job-feature-logo' src={picture} alt="" />
                <h1 className='job-feature-title'>{name}</h1>
                <p className='job-feature-name'>Experiences: {experiences}</p>
                <p className='job-feature-name'>Recipes: {recipes_number}</p>
                <p className='job-feature-name'>Likes: {likes}</p>
                
                <Link to={`/job/${id}`}><button className='view-btn'>View Recipes</button></Link>
            </div>

        </div>
    );
};

export default JobDetails;