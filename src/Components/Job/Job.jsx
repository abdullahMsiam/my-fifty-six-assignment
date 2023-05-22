import React, { useState } from 'react';
import './Job.css'
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';


const Job = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, categoryOne, categoryTwo, location, timeOne, TimeTwo, salary } = job;
    // console.log(job);
    // const [job, setJob] = useState([]);
    const handleToDetails = (id) => {
        // window.location.href(`/jobDetails/${id}`)
    }


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
                <p>Location: {location}</p>
                <p>Salary: {salary}</p>
            </div>

            <Link to={`/jobDetails/${id}`}><button onClick={() => handleToDetails(id)} className='btn-detail'>View Details</button></Link>

        </div>
    );
};
// export {Job,b}
// export function handleToDetails;
export default Job;