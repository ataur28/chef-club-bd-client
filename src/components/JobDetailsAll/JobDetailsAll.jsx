import React, { useState } from 'react';
import './JobDetailsAll.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocation, faBook, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';
import Footer from '../Footer/Footer';

const JobDetailsAll = () => {
    const { jobId } = useParams();
    // console.log(jobs)
    const [details, setDetails] = useState(useLoaderData());
    // console.log(details);

    const job = details.find((job) => job.id == jobId)
    // console.log(job)
    const { id, picture, name, experiences, recipes_number, likes } = job;
    // console.log(jobId);
    const [jobs, setJobs] = useState([])

    const handleAddToCart = (job) => {
        console.log(job)
        const newJobs = [...jobs, job];
        setJobs(newJobs);
        console.log(newJobs)
        addToDb(job.id);
    }

    return (
        <div>
            <div>
                <h1 className='banner-title'>Chef Recipe</h1>
            </div>
            <div className='job-details-container'>
                <div className='job-details-dec'>
                    <div className='job-feature-item job-details-item '>
                        <img className='job-feature-logo ' src={picture} alt="" />
                        <h1 className='job-feature-title'>{name}</h1>
                        <p className='job-feature-name'>Experiences: {experiences}</p>
                        <p className='job-feature-name'>Recipes: {recipes_number}</p>
                        <p className='job-feature-name'>Likes: {likes}</p>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetailsAll;