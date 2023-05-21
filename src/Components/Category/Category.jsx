import React from 'react';
import './Category.css'

const Category = ({ category }) => {
    const { categoryLogo, categoryName, jobAvailable } = category;
    return (
        <div className='category'>
            <div className='category-info'>
                <img src={categoryLogo} alt="" />
                <h4 style={{ marginBottom: '0' }}>{categoryName}</h4>
                <p style={{ marginTop: '0s' }}>{jobAvailable} Job Available</p>
            </div>
        </div>
    );
};

export default Category;