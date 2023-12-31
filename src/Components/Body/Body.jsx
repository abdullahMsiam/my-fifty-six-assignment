import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Body.css'
import Job from '../Job/Job';
import Footer from '../Footer/Footer';

const Body = () => {
    const [categories, setCategories] = useState([]);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const fJobs = jobs.slice(0, 4);
    let firstJobs = [...fJobs];

    const newJobs = [...jobs];

    const handleAllJobs = () => {
        firstJobs = newJobs;
    }


    return (
        <div>
            <div>
                <h1 style={{ textAlign: 'center' }}>Job Category List</h1>
                <p style={{ textAlign: 'center' }}>Explore the awesome job information with magical system</p>
                <div className='categories'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
            <div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <h1>Featured Jobs</h1>
                    <p>Find the job which is perfect for yourself and meet with dream!</p>
                </div>
                <div className='jobs'>
                    {
                        firstJobs.map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0' }}>
                    <button onClick={() => handleAllJobs()} className='btn-detail'>Show All Jobs</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Body;