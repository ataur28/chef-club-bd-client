import React from 'react';
import './JobList.css'

const JobList = ({ jobList }) => {
    // console.log(jobList);

    const { name, logo, jobs } = jobList;
    return (
        <div className='job-list'>
            <div>
                <img className='job-list-logo' src={logo} alt="" />
            </div>
            <h3>{name}</h3>
            <p>{jobs} Jobs Available</p>
        </div>
    );
};

export default JobList;