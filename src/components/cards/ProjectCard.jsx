import React,{useState} from 'react'
import '../css/protfolio.css'

function ProjectCard({project}) {

    const {image,title,description,stack1,stack2,stack3,githubLink,liveLink} = project;
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

  return (
    <div className='w-11/12 protfolio-card'>
        <div className='card w-full items-center bg-base-100 shadow-xl'>
            <div className='items-center w-1/3 mt-2'>
            <figure>
                <img src={image} alt="" className=' w-11/12'/>
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
            <p>{expanded ? description : `${description.slice(0, 100)}...`}</p>
                    {!expanded && (
                        <button onClick={toggleExpand} className='text-orange-500 underline'>
                            Read More
                        </button>
                    )}
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