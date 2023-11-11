import React from 'react';
import './SkillCard.css';

const SkillCard = ({img,title}) => {
  return (
    <div className='skill-card'>
    <img src={img}alt='react-icon'/>
    <h5>{title}</h5>
</div>
    
  )
}

export default SkillCard
