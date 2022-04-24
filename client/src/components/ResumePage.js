import { Button } from '@mui/material'
import React from 'react'
import './styles/Resume.css'
import res from './resume/Resume.pdf'

const ResumePage = () => {
  return (
    <>
    <div>Download my
      <Button href={res}  color='primary'>Resume</Button>
      </div>
    <div className='skills'>
      <h1>Skills</h1>
      <div className='content'>
        <div>
          <strong>Languages</strong>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node Js</li>
        </div>
        <div>
          <strong>Libraries</strong>
          <li>React Js</li>
          <li>Express Js</li>
          <li>Material Ui Js</li>
          <li>Bootstrap</li>
          <li>Jquery</li>
        </div>
        <div>
          <strong>Tools</strong>
          <li>Webpack</li>
          <li>Chrome Dev Tools</li>
          <li>Git and Github</li>
        </div>
      </div>
    </div>
    </>

  
  )
}

export default ResumePage