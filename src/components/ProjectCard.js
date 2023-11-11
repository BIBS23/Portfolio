import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({img,title,intro}) => {
  return (

    <div className='project-card'>
    <img src={img}alt='project img'/>
    <div className='project-title'>
    <h5>{title}</h5>
    <p>{intro}</p>
    </div>
</div>

    
   
  )
}

export default ProjectCard
