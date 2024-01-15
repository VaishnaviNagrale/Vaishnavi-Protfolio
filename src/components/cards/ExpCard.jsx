import React from 'react'
import { IconContext } from 'react-icons';

function ExpCard({ job }) {
    const { icon, jobTitle, duration, des1, des2, companyName } = job;

    return (
        <div className='hover:text-white hover:text-lg duration-200'>
            <IconContext.Provider value={{ size: '3rem' }}>
                <div className='flex items-center justify-center'>
                    <figure>
                        <i>{icon}</i>
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title text-orange-400'>{jobTitle}</h2>
                        <p>{companyName}</p>
                        <p>{duration}</p>
                        <ul className="list-disc pl-4">
                            <li className="mb-2">{des1}</li>
                            <li className="mb-2">{des2}</li>
                        </ul>

                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default ExpCard