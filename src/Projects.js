import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
//import './App.css';
import Logo from './images/mini-icon.png';
import Journal_Logo from './images/journal_icon.png';
import BigOLogo from './images/Big_O.png';
import './styles.css'
const Projects = (props) => {
  return (
    // Render a Thumbnail component
  <div>
    <h1 className = "page-section-heading-projects mb-0 d-inline-block">Projects</h1>
    <div className = 'projects-container'>

      <Thumbnail
        link = '/supperwhere'
        image= { Logo }
        title = "Supperwhere"
        description = "A fullstack website built with MERN. This app recommends restaurants to users based on location and their preferences."
      />

      <Thumbnail
        link= '/a-certain-daily-journal'
        image= { Journal_Logo }
        title = "A Certain Daily Journal"
        description = "A journal sharing website built with Node.js, Express.js, MongoDB, and handlebars.js."
      />
      <Thumbnail
        link = '/big-o-bot'
        image = { BigOLogo }
        title = "Big O Bot"
        description = "A fun twitter bot that alters phrases. Built in python with its NLP library."
      />
    </div>
  </div>
  )
}

export default Projects;
