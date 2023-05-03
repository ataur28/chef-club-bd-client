import React, { useEffect, useState } from 'react';
import './JobFeatures.css'
import JobDetails from '../JobDetails/JobDetails';
import JobDetailsAll from '../JobDetailsAll/JobDetailsAll';

const JobFeatures = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);



    return (
        <div>
            <h1 className='feature-title'>Featured Jobs</h1>
            <p className='feature-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-feature-items'>
                {
                    jobs.map(job => <JobDetails
                    key={job.id}
                    job={job}
                    ></JobDetails>)
                }
            </div>
        </div>
    );
};

export default JobFeatures;