import React, { useState } from 'react';
import './JobDetails.css';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();


    const remJob = jobs.find(jb => jb.id === id);
    console.log(remJob);
    const { companyLogo, jobTitle, companyName, categoryOne, categoryTwo, location, timeOne, TimeTwo, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, phone } = remJob;
    console.log(location);



    // console.log(id)
    // console.log(job)
    return (
        <div>
            <h1>job detail</h1>
            <div>
                <div>
                    <h4>Job Description:</h4>
                    <p> {jobDescription} </p>
                    <h4>Job Responsibility:</h4>
                    <p>  {jobResponsibility}</p>
                    <h4>Educational Requirement:</h4> <p>{educationalRequirements}</p>
                    <h4>Experiences: </h4> <p>{experiences}</p>
                </div>
                <div>
                    <div>
                        <h4>Job Detail</h4>
                        <hr />
                        <p>Salary: {salary} (per-month)</p>
                        <p>Job Title: {jobTitle}</p>
                        <hr />
                        <p>Phone: {phone}</p>
                        <p>Email: email899@gmail.com</p>
                        <p>Address: {location}</p>
                    </div>
                    <button className='btn-detail'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;