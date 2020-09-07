import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { ExternalLink } from 'react-external-link';
//import { motion } from 'framer-motion';
//import ThumbnailButton from './ThumbnailButton.js';
import './App.css';
import './Thumbnail.css';
import './styles.css'
 
const Thumbnail = (props) => {

  const [hoverState, setHoverState] = useState("");

  const onMouseOver = event => {
    console.log("printing");
    setHoverState("More Info");
  }

  const onMouseOut = event => {
    setHoverState("");
  }

  return (

    <div className="row justify-content-center">
     
        <div className = "col-md-6">
          <div className="portfolio-item mx-auto" data-toggle= "modal" data-target="#portfolioModal0">
            <div className = "portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
              <Link to = {props.link}><img className = 'img-fluid' src={props.image} alt="Project Image"
                onMouseEnter = {onMouseOver}
                onMouseLeave = {onMouseOut}
              /></Link>
              <div className = 'img-description'>{hoverState}</div>

            </div>
          </div>
          <Link to = {props.link} className = "mobile-click">
          <div className="project-title">{props.title}</div>       
          </Link>
        </div>
        <Link to = {props.link} className = "mobile-click">
        <div className ="project-description">{props.description}</div>
        </Link>
    </div>
  )
}

export default Thumbnail;