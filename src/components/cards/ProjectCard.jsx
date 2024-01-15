import React from 'react'
import '../css/protfolio.css'

function ProjectCard({project}) {

    const {image,title,description,stack1,stack2,stack3,githubLink,liveLink} = project;
  return (
    <div className='w-11/12 mx-10 lg:w-full protfolio-card'>
        <div className='card w-11/12 items-center lg:w-96 bg-base-100 shadow-xl'>
            <div className='items-center w-1/3 mt-2'>
            <figure>
                <img src={image} alt="" className='w-full'/>
            </figure>
            </div>
            <div className="card-body">
            <h2 className="card-title block">
                {title}
                <br></br>
            <div className="badge badge-info mx-2">{stack1}</div>
            <div className="badge badge-info mx-2">{stack2}</div>
            <div className="badge badge-info mx-2">{stack3}</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <a href={githubLink} className="protfolio-button-github">Source Code</a>
            <a href={liveLink} className="protfolio-button-site">Site Link</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard