import React from 'react'
import './styles/AboutMe.css'
import { Avatar } from '@mui/material'
import brenden from './images/brenden.PNG'

const About = () => {
  return (
     <section className="about-me" id="about">

<Avatar
  alt="Brenden"
  src={brenden}
  sx={{ width: 56, height: 56 }}
/>
        <h2 className="section__ttle-about __ttl__about">
            About me 
        </h2>

        <div className="about-me-body">
            <p>I'm a 23 year old just trying to figure out my life. I was born and raised in Aurora, Colorado. I decided to give web developement a shot because I was interested in the process of designing and making a website work.</p>
            <p>I come from retail, so all of it is new, but the Coding Bootcamp that I am taking through DU is making the learning process a lot easier.</p>
        </div>
        </section>
  )
}

export default About