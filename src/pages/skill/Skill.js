import React from 'react';
import react from '../../assets/react.png';
import html from '../../assets/html.png';
import flutter from '../../assets/flutter.png';
import './Skill.css';
import SkillCard from '../../components/SkillCard';

const skill = () => {
  return (
    <div className='skill-container'>
        <div className='skill-intro'>
        <h5>SKILLS</h5>
        <h3>What I Am Great At</h3>
        <p>Your computer skills are your passport to a world where innovation knows no bounds, and your journey is defined by the code you write and the problems you solve</p>
        </div>
        <div className='skill-section1'>
            <SkillCard img={react}title={'React'} />
            <SkillCard img={html}title={'Html'} />
            <SkillCard img={flutter}title={'Flutter'} />
            <SkillCard img={react}title={'React'} />

        </div>

        <div className='skill-section2'>
            <SkillCard img={react}title={'React'} />
            <SkillCard img={react}title={'React'} />
            <SkillCard img={react}title={'React'} />
            <SkillCard img={react}title={'React'} />

        </div>
       
    </div>
  )
}

export default skill
