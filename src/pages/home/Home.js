import React from 'react';
import './Home.css';
import bibs from '../../assets/bibs.png';

const Home = () => {
  return (
    <div className='home-container'>

      <div className='name'>
        <h1>Bibin</h1>
        <h1>Jose<span>.</span> </h1>


      </div>
      <div className='line'></div>
      <div className='social-media'>
        <div>
          <a href=''>LinkedIn |</a>
          <a href=''>Github</a>
        </div>
        <div>
          <a href=''>Instagram |</a>
          <a href=''>X</a>
        </div>
      </div>

      <img src={bibs} alt='profileimg' />
      <div className='intro'>
        <h5>INTRODUCTION</h5>
        <h3>Flutter Developer,</h3>
        <h3>Web Developer</h3>
        <p>Hello, I'm a dynamic and ambitious Flutter and web developer currently enrolled in the Computer Science Engineering program at St. Joseph College of Engineering and Technology. With a strong foundation in programming and a love for creating innovative mobile and web applications, I'm excited to bring my skills and passion to the world of technology.</p>
      </div>




    </div>
  )
}

export default Home
