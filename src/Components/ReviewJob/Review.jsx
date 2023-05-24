import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSingle from '../ReviewSingle/ReviewSingle';
import Footer from '../Footer/Footer';
import './Review.css'

const Review = () => {
    const { savedCart } = useLoaderData();

    const [jobs, setJobs] = useState(savedCart);
    // console.log(jobs);
    // console.log(savedCart);
    return (
        <div>
            <div className='job-review'>
                <h2 style={{ textAlign: 'center', margin: '30px auto 30px' }}>Applied Job</h2>
                {
                    jobs.map(job => <ReviewSingle
                        key={job.id}
                        job={job}
                    ></ReviewSingle>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Review;