import React from 'react'
import './styles/Portfolio.css'
import All from './images/All-Pain-No-Grain.png'
import project1 from './images/project1png.png'
import note from './images/noteTaker.png'
import password from './images/passwordgenerator.png'
import quiz from './images/quiz.png'
import text from './images/text.png'

const Portfolio = () => {
  return (
    <section className="my-work" id="work">
    <h2 className="section__ttle"> Work click each to view</h2>

    <div className="port">
        <a href='https://paterma.github.io/Bug-Spray/' className="port__item">
            <img src= {project1} alt="Placeholder"/>
        </a>

        <a href='https://gentle-everglades-97970.herokuapp.com/' className="port__item">
            <img src={All} 
            alt="Project 2"/>
        </a>

        <a href="https://notetaker-heroku.herokuapp.com/" className="port__item">
            <img src={note}
            alt="Placeholder"/>
        </a>

        <a href="https://bholt7.github.io/ifpasswordgreneratorswerehuman/" className="port__item">
            <img src={password}
            alt="Placeholder"/>
        </a>
        <a href="https://bholt7.github.io/Nqz7/" className="port__item">
            <img src={quiz}
            alt="Placeholder"/>
        </a>
        <a href="https://pwa-text-editor4.herokuapp.com/" className="port__item">
            <img src={text}
            alt="Placeholder"/>
        </a>
        
    </div>
    </section>
  )
}

export default Portfolio