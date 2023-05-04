import React, { useEffect, useState } from 'react';
import './JobFeatures.css'
import JobDetails from '../JobDetails/JobDetails';
import JobDetailsAll from '../JobDetailsAll/JobDetailsAll';

const JobFeatures = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://chef-club-bd-asten-server-ataur28.vercel.app/chef')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);



    return (
        <div>
            <h1 className='feature-title'>All Chef</h1>
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