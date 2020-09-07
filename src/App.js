import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Supperwhere from './Supperwhere';
import BigOBot from './BigOBot';
import Journal from './Journal';
import logo from './logo.svg';
import Resume from './Omar_Morhbi_Resume.pdf';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';


const App = () => {

  return (

    <Router>
      <div className="App">

          <Navbar />
        
        <Route path="/portfolio-website" exact>
            <About />
        </Route>
        <Route exact path="/portfolio-website/projects">
            <Projects />
        </Route>
        <Route exact path = "/portfolio-website/projects/supperwhere">
            <Supperwhere />
        </Route>
        <Route exact path = "/portfolio-website/projects/big-o-bot">
            <BigOBot />
        </Route>
        <Route exact path = "/portfolio-website/projects/a-certain-daily-journal">
            <Journal />
        </Route>

      </div>
    </Router>
  );
}

export default App;
