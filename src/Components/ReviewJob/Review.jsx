import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { savedCart } = useLoaderData();

    const [jobs, setJobs] = useState(savedCart);
    // console.log(jobs);
    // console.log(savedCart);
    return (
        <div>
            {
                jobs.map(job => console.log(job.location))
            }
        </div>
    );
};

export default Review;