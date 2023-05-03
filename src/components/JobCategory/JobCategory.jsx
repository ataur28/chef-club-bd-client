import React from 'react';
import './JobCategory.css'
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';

const JobCategory = () => {
    const jobCategory = useLoaderData();
    return (
        <div>
            <h1 className='job-category-title'>Food Category List</h1>
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