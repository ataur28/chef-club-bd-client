import React from 'react';
import './JobCategory.css'
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';

const JobCategory = () => {
    const jobCategory = useLoaderData();
    return (
        <div>
            <h1 className='job-category-title'>Job Category List</h1>
            <p className='job-category-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='job-category-list'>
                {
                    jobCategory.map(jobList => <JobList
                    key={jobList.id}
                    jobList={jobList}
                    ></JobList>)
                }
            </div>
        </div>
    );
};

export default JobCategory;