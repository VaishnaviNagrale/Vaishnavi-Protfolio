import React from 'react'
import { IconContext } from 'react-icons';

function EduCard({educt}) {
    const {icon,name,duration,course} = educt;

  return (
    <div>
        <IconContext.Provider value={{size: '3rem'}}>
            <div className='flex items-center justify-center'>
                <figure>
                    <i>{icon}</i>
                </figure>
                <div className='card-body'>
                    <h2 className='card-title text-orange-400'>{course}</h2>
                    <h3>{name}</h3>
                    <h3>{duration}</h3>
                </div>
            </div>
        </IconContext.Provider>
    </div>
  )
}

export default EduCard