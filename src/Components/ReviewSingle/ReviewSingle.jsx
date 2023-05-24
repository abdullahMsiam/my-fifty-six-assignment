import React from 'react';
import './ReviewSingle.css'


const ReviewSingle = ({ job }) => {

    const { id, companyLogo, jobTitle, companyName, categoryOne, categoryTwo, location, timeOne, TimeTwo, salary } = job;
    return (
        <div className='review-single'>
            <img src={companyLogo} alt="" />
            <div className='review-info'>
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

            </div>
            <button className='btn-detail'>View Details</button>
        </div>
    );
};

export default ReviewSingle;