import React from 'react';
import './Job.css'
const Job = ({ job }) => {
    const { companyLogo, jobTitle, companyName, categoryOne, categoryTwo, location, timeOne, TimeTwo, salary } = job;
    console.log(categoryOne);
    return (
        <div className='job-info'>
            <img src={companyLogo} alt="" />
            <h4>{jobTitle}</h4>
            <p>{companyName}</p>
            <div className='flex'> <span>
                <button>{categoryOne}</button>
            </span>
                <span>
                    <button>{categoryTwo}</button>
                </span>
            </div>
            <div className='flex'>
                <p>{location}</p>
                <p>Salary: {salary}</p>
            </div>
            <button className='btn-detail'>View Details</button>
        </div>
    );
};

export default Job;