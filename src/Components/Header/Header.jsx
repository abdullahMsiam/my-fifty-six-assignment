import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Body from '../Body/Body';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='navbar'>
                    <div>
                        <h2>YOUR's JOB</h2>
                    </div>
                    <div>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/appliedJob">Applied Job</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div>
                        <button>Start Apply</button>
                    </div>
                </div>
                <div>
                    <h1>You are <br /> <span>To Close for</span> <br /> <span style={{ color: 'crimson' }}>Your JOB</span></h1>
                    <p>You can explore the job which we are <br />committed to you. Here is all job are awesome for choose your career <br />Now take a step for those... </p>
                    <button>Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default Header;