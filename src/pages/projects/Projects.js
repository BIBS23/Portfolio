import React from 'react';
import './Projects.css';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpeg';
import p3 from '../../assets/p3.jpeg';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  return (
    <div className='project-container' id='projects'>
         <div className='project-intro'>
        <h5>My Project</h5>
        <h3>A Glimpse of My Work</h3>
        <p>Projects in the world of computers are like galaxies in the universe, each one waiting to be explored, developed, and interconnected to create something truly remarkable.</p>
        </div>
    <div className='project-section1'>
    <ProjectCard img={p1}title={'Tech Village'}intro={'TechVillage is a user-friendly Flutter app that supports local businesses by promoting their services. It also helps residents find local services like plumbers and auto drivers. Plus, it allows Panchayat to send grant notifications directly to the local community.'} />
    <ProjectCard img={p2}title={'MediTrack'}intro={'Meditrack is a user-friendly Flutter app designed to swiftly locate nearby hospitals from the users location, ensuring convenient and rapid access to healthcare services.'} />
    <ProjectCard img={p3}title={'MeChat'}intro={'Mechat is a friendly Flutter chat app that makes talking to friends easy and fun. Stay connected effortlessly and enjoy chatting with your buddies in a user-friendly environment.'} />

   
    </div>

      
    </div>
  )
}

export default Projects
