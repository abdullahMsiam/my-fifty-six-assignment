import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Body.css'

const Body = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

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
        </div>
    );
};

export default Body;