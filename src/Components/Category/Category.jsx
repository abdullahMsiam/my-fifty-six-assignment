import React from 'react';
import './Category.css'

const Category = ({ category }) => {
    const { categoryLogo, categoryName, jobAvailable } = category;
    return (
        <div className='category'>
            <div className='category-info'>
                <img src={categoryLogo} alt="" />
            </div>
        </div>
    );
};

export default Category;