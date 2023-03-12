import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='cardContainer'>
            <div className='cards'>
                <div className='card card1'>
                    <h2>Alumni Number</h2>
                    <h2>300</h2>
                </div>
                <div className='card card2'>
                    <h2>Job posted</h2>
                    <h2>30</h2>
                </div>
                <div className='card card3'>
                    <h2>Ongoing Discussion</h2>
                    <h2>10</h2>
                </div>

            </div>
        </div>
    );
};

export default Home;