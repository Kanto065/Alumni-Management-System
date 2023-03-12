import React from 'react';
import './JobList.css';

const JobList = () => {
    return (
        <div className='JobContainer'>
            <div className='job' >
                <h2>Software Engineer</h2>
                <p>Deadline: 20/3/23</p>
                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione repellat assumenda voluptates fuga beatae repudiandae reprehenderit aliquid laboriosam numquam, eos quae quidem eum vel. Quo praesentium quia adipisci asperiores?</p>
            </div>
            <div className='job' >
                <h2>Data Analyst </h2>
                <p>Deadline: 20/3/23</p>
                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione repellat assumenda voluptates fuga beatae repudiandae reprehenderit aliquid laboriosam numquam, eos quae quidem eum vel. Quo praesentium quia adipisci asperiores?</p>
            </div>
            <div className='job' >
                <h2>QA Engineer</h2>
                <p>Deadline: 20/3/23</p>
                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione repellat assumenda voluptates fuga beatae repudiandae reprehenderit aliquid laboriosam numquam, eos quae quidem eum vel. Quo praesentium quia adipisci asperiores?</p>
            </div>


        </div>
    );
};

export default JobList;