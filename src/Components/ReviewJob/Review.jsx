import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { savedCart } = useLoaderData();
    // const [job, setJob] = useState(savedJob)
    console.log(savedCart);
    return (
        <div>
            hello
        </div>
    );
};

export default Review;