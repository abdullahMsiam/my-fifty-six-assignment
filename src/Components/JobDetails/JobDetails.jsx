import React, { useEffect, useState } from 'react';
import './JobDetails.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const { jobs } = useLoaderData();
    const { id } = useParams();



    const remJob = jobs.find(jb => jb.id === id);

    const { companyLogo, jobTitle, companyName, categoryOne, categoryTwo, location, timeOne, TimeTwo, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, phone } = remJob;

    const handleAddToDb = id => {
        addToDb(id);
    }
    return (
        <div className='job-details'>
            <h1>job details</h1>
            <div className='job-detail-info'>
                <div>
                    <h4>Job Description:</h4>
                    <p> {jobDescription} </p>
                    <h4>Job Responsibility:</h4>
                    <p>  {jobResponsibility}</p>
                    <h4>Educational Requirement:</h4> <p>{educationalRequirements}</p>
                    <h4>Experiences: </h4> <p>{experiences}</p>
                </div>
                <div className='job-deep'>
                    <div >
                        <h4>Job Detail</h4>
                        <hr />
                        <p>Salary: {salary} (per-month)</p>
                        <p>Job Title: {jobTitle}</p>
                        <hr />
                        <p>Phone: {phone}</p>
                        <p>Email: email899@gmail.com</p>
                        <p>Address: {location}</p>
                    </div>
                    <button onClick={() => handleAddToDb(id)} className='btn-detail'>Apply Now</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;