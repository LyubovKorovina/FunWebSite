import React from 'react';
import './About.css';
import myAvatar from "../../assets/avatar.png"

const About = () => {
  return (
    <section id="header">
        <div className='container header'>
          <div className='header-left'>
              <img src='https://images.pexels.com/photos/4545953/pexels-photo-4545953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='avatar'></img>
          </div>

          <div className='header-right'>
              <h1 className='about-title'>I am a cyber security engineer.</h1>
              <p className='u-text-small u-text-dark'>I am just learning though...<br/><br/>
              My fun fact - first cyber security job is all about the documentation! <br/> No hacking at all.</p>
              
          </div>
        </div>
    </section>
  );
};

export default About
