import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>Upcoming events for The Burger Life in Burger House. Explore our local events with showtimes and tickets.</p>
            <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
    </div>
  )
}

export default About;
