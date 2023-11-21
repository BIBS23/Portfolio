import React from 'react';
import react from '../../assets/react.png';
import html from '../../assets/html.png';
import flutter from '../../assets/flutter.png';
import js from '../../assets/js.png';
import dart from '../../assets/dart.png';
import python from '../../assets/py.png';
import css from '../../assets/css.png';
import boot from '../../assets/boot.png';
import './Skill.css';
import SkillCard from '../../components/SkillCard';

const skill = () => {
  return (
    <div className='skill-container' id='skills'>
        <div className='skill-intro'>
        <h5>SKILLS</h5>
        <h3>What I Am Great At</h3>
        <p>Your computer skills are your passport to a world where innovation knows no bounds, and your journey is defined by the code you write and the problems you solve</p>
        </div>
        <div className='skill-section1'>
            <SkillCard img={react}title={'React'} />
            <SkillCard img={html}title={'Html'} />
            <SkillCard img={flutter}title={'Flutter'} />
            <SkillCard img={boot}title={'Bootstrap'} />

        </div>

        <div className='skill-section2'>
            <SkillCard img={js}title={'JS'} />
            <SkillCard img={css}title={'Css'} />
            <SkillCard img={python}title={'Python'} />
            <SkillCard img={dart}title={'Dart'} />

        </div>
       
    </div>
  )
}

export default skill
